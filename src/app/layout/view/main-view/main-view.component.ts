import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../../domain/emun/article-type';
import {AbstractArticleService} from "../../../service/backend/abstract.article.service";
import {NewsArticleService} from "../../../service/backend/news.article.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  providers: [
    { provide: AbstractArticleService, useClass: NewsArticleService }
  ]
})
export class MainViewComponent implements OnInit {
  articleType = ArticleType.news;
  service;

  constructor(abstractBackendService: AbstractArticleService) {
    this.service = abstractBackendService;
  }

  ngOnInit() {
  }
}
