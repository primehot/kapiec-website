import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../../domain/emun/article-type';
import {NewsArticleService} from "../../../service/backend/news.article.service";
import {AbstractArticleService} from "../../../service/backend/abstract.article.service";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css'],
  providers: [
    { provide: AbstractArticleService, useClass: NewsArticleService }
  ]
})
export class NewsViewComponent implements OnInit {
  articleType = ArticleType.news;
  service;

  constructor(abstractBackendService: AbstractArticleService) {
    this.service = abstractBackendService;
  }

  ngOnInit() {
  }
}
