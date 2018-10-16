import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {BackendService} from '../../service/backend.service';
import {Article} from '../../dto/article';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css', '../bootstrap.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsViewComponent implements OnInit {
  mainNews = 'Main title';

  asyncMeals: Observable<Article[]>;
  p = 1;
  total: number;
  loading: boolean;


  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.getPage(1);
  }

  getImage(id) {
    console.log(this.backendService.getNewsImageLink(id))
    return this.backendService.getNewsImageLink(id);
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = this.backendService.getNewsPage(page - 1, 10).pipe(
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
