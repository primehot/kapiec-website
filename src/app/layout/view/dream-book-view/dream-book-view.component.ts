import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ImageService} from "../../../service/backend/article/image.service";
import {ActivatedRoute} from "@angular/router";
import {DreamBookTitlePage} from "../../../domain/dto/dream_book/dream.book";

@Component({
  selector: 'app-dream-book-view',
  templateUrl: './dream-book-view.component.html',
  styleUrls: ['./dream-book-view.component.css']
})
export class DreamBookViewComponent implements OnInit, OnDestroy {

  articleType = ArticleType.dream;
  dreamBookData: DreamBookTitlePage;
  inputValue;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute,
              private imageService: ImageService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((data: { dreamBookTitlePage: DreamBookTitlePage }) => {
        this.dreamBookData = data.dreamBookTitlePage;
        this.inputValue = data.dreamBookTitlePage.title;
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

}
