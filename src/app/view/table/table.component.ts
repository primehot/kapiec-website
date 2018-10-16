import {Component, ChangeDetectionStrategy, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {BackendService} from '../../service/backend.service';
import {Article} from '../../dto/article';
import {ArticleType} from '../../emun/article-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../bootstrap.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() articleType: ArticleType;

  asyncMeals: Observable<Article[]>;
  p = 1;
  total: number;
  loading: boolean;
  pageSize = 10;


  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.getPage(1);
  }

  getImage(id) {
    console.log(this.backendService.geImage(this.articleType, id));
    return this.backendService.geImage(this.articleType, id);
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = this.backendService.getPage(this.articleType, page - 1, 10).pipe(
      tap(res => {
        console.log(res);
        this.total = res.totalElements;
        this.p = page;
        this.loading = false;
      })
      ,
      map(res => res.items)
    );
  }
}
