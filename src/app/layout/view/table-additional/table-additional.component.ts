import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AdditionalDataService} from "../../../service/backend/article/additional.data.service";
import {ArticleType} from "../../../domain/emun/article.type";
import {ImageService} from "../../../service/backend/article/image.service";
import {Observable, Subject} from "rxjs/index";
import {share, subscribeOn, takeUntil, tap} from "rxjs/internal/operators";
import {ArticleAdditional} from "../../../domain/dto/article/article.additional";
import {ArticleShort} from "../../../domain/dto/article/article.short";

@Component({
  selector: 'app-table-additional',
  templateUrl: './table-additional.component.html',
  styleUrls: ['./table-additional.component.css']
})
export class TableAdditionalComponent implements OnInit, OnDestroy {

  @Input() articleType: ArticleType;
  @Input() topicId?: string;
  @Input() tagId?: string;

  newest: ArticleShort[];
  firstPartRecommended: ArticleShort[];
  secondPartRecommended: ArticleShort[];

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private imageService: ImageService,
              private additionalDataService: AdditionalDataService) {
  }

  ngOnInit() {
    console.log(this.articleType);
    this.getAdditionalArticleDataMethod()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(next => {
          console.log(next);
          this.firstPartRecommended = next.recommended.slice(0, 2);
          this.secondPartRecommended = next.recommended.slice(2, next.recommended.length);
          this.newest = next.newest;
        });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  getAdditionalArticleDataMethod() {
    if (this.tagId) {
      return this.additionalDataService.getAdditionalArticleByTag(this.articleType, this.tagId);
    } else if (this.topicId) {
      return this.additionalDataService.getAdditionalArticleByTopic(this.articleType, this.topicId);
    } else {
      return this.additionalDataService.getAdditionalArticle(this.articleType);
    }
  }

  getImage(articleType: ArticleType, id) {
    return this.imageService.getImageByType(articleType, id);
  }

}
