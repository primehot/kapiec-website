import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {DreamBook, DreamBookTitlePage} from "../../../domain/dto/dream_book/dream.book";
import {addFullViewPort} from "../../../jquery";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dream-book-view',
  templateUrl: './dream-book-view.component.html',
  styleUrls: ['./dream-book-view.component.css']
})
export class DreamBookViewComponent implements OnInit, OnDestroy {

  articleType = ArticleType.dream;
  // title: string;
  dreamBooks: DreamBook[];
  inputValue: string;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private title: Title,
              private meta: Meta) {
  }

  ngOnInit() {
    addFullViewPort('dream-book-view', -20);
    this.route.data
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((data: { dreamBookTitlePage: DreamBookTitlePage }) => {
        if (data.dreamBookTitlePage) {
          this.dreamBooks = data.dreamBookTitlePage.dreamBooks;
          this.inputValue = data.dreamBookTitlePage.title;
          this.setTitleMetadata();
        }
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  onEnterPress() {
    // this.router.navigate(['/' + ArticleType.dream + '/' + ArticleType.search, this.inputValue]);
    this.router.navigateByUrl('/' + ArticleType.dream + '/' + ArticleType.search + '/' + this.inputValue)
  }

  setTitleMetadata() {
    this.meta.addTag({ name: 'description', content: 'Значение снов. Если приснилось: ' + this.inputValue });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Сонник' });
  }

}
