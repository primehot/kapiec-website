import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {NavigationDataService} from "../../../service/backend/article/navigation.data.service";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";

@Component({
  selector: 'app-navigation-collapse',
  templateUrl: './navigation.collapse.component.html',
  styleUrls: ['./navigation.collapse.component.css']
})
export class CustomMenuComponent implements OnInit, OnDestroy {

  @Input() type: ArticleType;

  articleTopics;
  articles;
  articleSeeAlso;
  articleMostCommented;

  dreamBookMainTitles;
  dreamBookSeeAlso;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private navigationDataService: NavigationDataService) {
  }

  ngOnInit() {
    if (this.type === ArticleType.dream) {
      this.navigationDataService.getDreamBookNavigationData()
        .pipe(takeUntil(this.componentDestroyed))
        .subscribe(navData => {
          this.dreamBookMainTitles = navData.mainTitles;
          this.dreamBookSeeAlso = navData.seeAlso;
        });
    } else {
      this.navigationDataService.getArticleNavigationData(this.type)
        .pipe(takeUntil(this.componentDestroyed))
        .subscribe(navData => {
          this.articleTopics = navData.topics;
          this.articles = navData.articles;
          this.articleSeeAlso = navData.seeAlso;
          this.articleMostCommented = navData.mostCommented;
        });
    }
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

}
