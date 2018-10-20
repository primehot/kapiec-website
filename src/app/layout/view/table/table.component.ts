import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Article} from '../../../domain/dto/article';
import {ArticleType} from '../../../domain/emun/article-type';
import {AbstractArticleService} from "../../../service/backend/abstract.article.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../bootstrap.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() articleType: ArticleType;
  @Input() articleService: AbstractArticleService;
  @Input() topicId?: number;

  asyncMeals: Observable<Article[]>;
  p = 1;
  total: number;
  loading: boolean;
  pageSize = 10;

  constructor() {
  }

  ngOnInit() {
    this.getPage(1);
  }

  getImage(id) {
    return this.articleService.getImage(id);
  }

  getServicePageMethod(page: number) {
    if (this.topicId) {
      return this.articleService.getPageByTopic(this.topicId, page, this.pageSize);
    } else {
      return this.articleService.getPage(page, this.pageSize);
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
