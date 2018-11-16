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
  @Input() tagId?: number;
  @Input() topic?: string;

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

  getImage(id) {
    return this.imageService.getImageByType(this.articleType, id);
  }

  getServicePageMethod(page: number) {
    if (this.topicId) {
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
