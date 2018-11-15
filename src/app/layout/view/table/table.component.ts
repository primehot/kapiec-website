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
  articleTypeName: string;

  asyncMeals: Observable<Article[]>;
  p = 1;
  total: number;
  loading: boolean;
  pageSize = 20;

  newest;
  firstPartRecommended;
  secondPartRecommended;

  constructor(private imageService: ImageService,
              private additionalDataService: AdditionalDataService,
              private tableService: TableService) {
  }

  ngOnInit() {
    this.getPage(1);
    this.additionalDataService.getAdditionalArticleData(this.articleType).subscribe(next => {
      let result = this.chunkArray(next.recommended, 2);
      this.firstPartRecommended = result[0];
      this.secondPartRecommended = result[1];
      this.newest = next.newest;
    });

    this.articleTypeName = getNavigationNameByType(this.articleType);
  }

  chunkArray(myArray, chunk_size) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let myChunk;

    for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
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
