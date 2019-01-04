import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdditionalDataService} from "../../../service/backend/article/additional.data.service";
import {ArticleType} from "../../../domain/emun/article.type";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ImageService} from "../../../service/backend/article/image.service";

@Component({
  selector: 'app-dream-book-additional',
  templateUrl: './dream-book-additional.component.html',
  styleUrls: ['./dream-book-additional.component.css']
})
export class DreamBookAdditionalComponent implements OnInit, OnDestroy {

  recommended;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private imageService: ImageService,
              private additionalDataService: AdditionalDataService) { }

  ngOnInit() {
    this.additionalDataService.getAdditionalArticle(ArticleType.dream).pipe(takeUntil(this.componentDestroyed))
      .subscribe(next => {
        this.recommended = next.recommended;
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  getImage(articleType: ArticleType, id) {
    return this.imageService.getImageByType(articleType, id);
  }

}
