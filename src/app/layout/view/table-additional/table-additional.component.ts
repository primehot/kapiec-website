import {Component, Input, OnInit} from '@angular/core';
import {AdditionalDataService} from "../../../service/backend/additional.data.service";
import {ArticleType} from "../../../domain/emun/article.type";
import {ImageService} from "../../../service/backend/image.service";
import {Observable} from "rxjs/index";
import {share, tap} from "rxjs/internal/operators";
import {ArticleAdditional} from "../../../domain/dto/article/article.additional";
import {ArticleShort} from "../../../domain/dto/article/article.short";

@Component({
  selector: 'app-table-additional',
  templateUrl: './table-additional.component.html',
  styleUrls: ['./table-additional.component.css']
})
export class TableAdditionalComponent implements OnInit {

  @Input() articleType: ArticleType;

  additional: Observable<ArticleAdditional>;

  newest: ArticleShort[];
  firstPartRecommended: ArticleShort[];
  secondPartRecommended: ArticleShort[];

  constructor(private imageService: ImageService,
              private additionalDataService: AdditionalDataService) {
  }

  ngOnInit() {
    console.log("TableAdditionalComponent ngOnInit");

    this.additional = this.additionalDataService.getAdditionalArticleData(this.articleType)
      .pipe(share(),
        tap(next => {
          let result = this.chunkArray(next.recommended, 2);
          this.firstPartRecommended = result[0];
          this.secondPartRecommended = result[1];
          this.newest = next.newest;
        }))
    ;
  }

  chunkArray(myArray, chunk_size) {
    let index: number;
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

  getImage(articleType: ArticleType, id) {
    return this.imageService.getImageByType(articleType, id);
  }

}
