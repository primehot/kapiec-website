import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BackendService} from '../../service/backend.service';
import {Article} from '../../dto/article';
import {Observable} from 'rxjs/index';
import {tap, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css', '../bootstrap.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent implements OnInit {
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
    console.log(this.backendService.getNewsImageLink(id));
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
