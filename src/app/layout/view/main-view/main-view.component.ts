import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainArticleService} from "../../../service/backend/main.article.service";
import {ImageService} from "../../../service/backend/image.service";
import {urlConfig} from "../../../service/util/url.config";
import {ArticleShort} from "../../../domain/dto/article/article.short";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css', '../bootstrap.view.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
  mainArticle: ArticleShort;
  mainItems: ArticleShort[];
  recommendedNews: ArticleShort[];
  recommendedWomen: ArticleShort[];

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private service: MainArticleService,
              private imageService: ImageService) {
  }

  getImage(id) {
    return this.imageService.getImage(urlConfig.newsUrl, id);
  }

  ngOnInit() {
    this.service.getMainArticles()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(next => {
        this.mainArticle = next.mainArticle;
        this.mainItems = next.mainItems;
        this.recommendedNews = next.recommendedNews;
        this.recommendedWomen = next.recommendedWomen;
      })
  }

  tagClick(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }
}
