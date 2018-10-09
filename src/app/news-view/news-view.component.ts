import {Component, ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/delay';


interface IServerResponse {
  items: string[];
  total: number;
}

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css', './new-view.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsViewComponent implements OnInit {
  @Input() meals: string[] = ['test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11'];

  mainNews = 'Main title';

  asyncMeals: Observable<string[]>;
  p = 1;
  total: number;
  loading: boolean;

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = serverCall(this.meals, page).pipe(
      tap(res => {
        this.total = res.total;
        this.p = page;
        this.loading = false;
      })
      ,
      map(res => res.items)
  );
  }

}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(meals: string[], page: number): Observable<IServerResponse> {
  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return of({
      items: meals.slice(start, end),
      total: meals.length
    }) ;
}
