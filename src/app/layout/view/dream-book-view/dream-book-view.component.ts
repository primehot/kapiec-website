import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {DreamBook, DreamBookTitlePage} from "../../../domain/dto/dream_book/dream.book";
import {DreamBookService} from "../../../service/backend/dream.book.service";
import {addFullViewPort} from "../../../jquery";

@Component({
  selector: 'app-dream-book-view',
  templateUrl: './dream-book-view.component.html',
  styleUrls: ['./dream-book-view.component.css']
})
export class DreamBookViewComponent implements OnInit, OnDestroy {

  articleType = ArticleType.dream;
  title: string;
  dreamBooks: DreamBook[];
  inputValue: string;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dreamBookService: DreamBookService) {
  }

  ngOnInit() {
    addFullViewPort('dream-book-view', -20);
    this.route.data
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((data: { dreamBookTitlePage: DreamBookTitlePage }) => {
        if (data.dreamBookTitlePage) {
          this.dreamBooks = data.dreamBookTitlePage.dreamBooks;
          this.inputValue = data.dreamBookTitlePage.title;
        }
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  onEnterPress() {
    this.router.navigate(['/' + ArticleType.dream + '/search', this.inputValue]);
  }

}
