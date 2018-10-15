import {Component, ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {BackendService} from '../../service/backend.service';
import {Article} from '../../dto/article';

@Component({
  selector: 'app-woman-view',
  templateUrl: './woman-view.component.html',
  styleUrls: ['./woman-view.component.css', '../bootstrap.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WomanViewComponent implements OnInit {
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
    return this.backendService.getWomanImageLink(id);
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = this.backendService.getWomanPage(page - 1, 10).pipe(
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
