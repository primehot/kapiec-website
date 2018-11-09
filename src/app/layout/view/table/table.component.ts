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
  pageSize = 20;

  newest;
  firstPartRecommended;
  secondPartRecommended;

  constructor() {
  }

  ngOnInit() {
    this.getPage(1);
    this.articleService.getAdditionalArticleData().subscribe(next => {
      let result = this.chunkArray(next.recommended, 2);
      this.firstPartRecommended = result[0];
      this.secondPartRecommended = result[1];
      this.newest = next.newest;
    });
  }

  chunkArray(myArray, chunk_size){
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let myChunk;

    for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index+chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
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
