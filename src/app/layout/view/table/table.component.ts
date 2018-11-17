import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Article} from '../../../domain/dto/article';
import {ArticleType, getNavigationNameByType} from '../../../domain/emun/article.type';
import {ImageService} from "../../../service/backend/image.service";
import {AdditionalDataService} from "../../../service/backend/additional.data.service";
import {TableService} from "../../../service/backend/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../bootstrap.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() articleType: ArticleType;
  @Input() topicId?: number;
  @Input() topic?: string;
  @Input() tagId?: number;
  @Input() tag?: string;

  asyncMeals: Observable<Article[]>;
  p = 1;
  total: number;
  loading: boolean;
  pageSize = 20;

  constructor(private imageService: ImageService,
              private tableService: TableService) {
  }

  ngOnInit() {
    this.getPage(1);
  }

  getImage(articleType: ArticleType, id) {
    return this.imageService.getImageByType(articleType, id);
  }

  getServicePageMethod(page: number) {
    if (this.tagId) {
      return this.tableService.getPageByTag(this.tagId, page, this.pageSize);
    }
    else if (this.topicId) {
      return this.tableService.getPageByTopic(this.articleType, this.topicId, page, this.pageSize);
    } else {
      return this.tableService.getPage(this.articleType, page, this.pageSize);
    }
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = this.getServicePageMethod(page - 1).pipe(
      tap(res => {
        console.log(res);
        this.total = res.totalElements;
        this.p = page;
        this.loading = false;
      }),
      map(res => res.items)
    );
  }

}
