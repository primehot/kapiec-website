import {Component, Input, OnInit} from '@angular/core';
import {AdditionalDataService} from "../../../service/backend/additional.data.service";
import {ArticleType} from "../../../domain/emun/article.type";
import {ImageService} from "../../../service/backend/image.service";
import {ArticleShort} from "../../../domain/dto/article.short";
import {tap} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";
import {ArticleAdditional} from "../../../domain/dto/article.additional";

@Component({
  selector: 'app-table-additional',
  templateUrl: './table-additional.component.html',
  styleUrls: ['./table-additional.component.css']
})
export class TableAdditionalComponent implements OnInit {

  @Input() articleType: ArticleType;

  additionalArticleData: Observable<ArticleAdditional>;
  newest: ArticleShort[];
  firstPartRecommended: ArticleShort[] = [];
  secondPartRecommended: ArticleShort[] = [];

  constructor(private imageService: ImageService,
              private additionalDataService: AdditionalDataService) {
  }

  ngOnInit() {
    console.log("TableAdditionalComponent ngOnInit");

     this.additionalDataService.getAdditionalArticleData(this.articleType)
      .subscribe(next => {
        this.additionalArticleData = Observable.create(next);
        console.log("From server");
        console.log(next);
        let result = this.chunkArray(next.recommended, 2);
        this.firstPartRecommended = result[0];
        this.secondPartRecommended = result[1];
        this.newest = next.newest;
      })
      // .pipe(
      //   tap(next => {
      //       console.log("From server");
      //       console.log(next);
      //       let result = this.chunkArray(next.recommended, 2);
      //       this.firstPartRecommended = result[0];
      //       this.secondPartRecommended = result[1];
      //       this.newest = next.newest;
      //     }
      //   )
      // )
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
