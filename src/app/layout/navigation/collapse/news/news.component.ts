import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article-type";
import {AbstractArticleService} from "../../../../service/backend/abstract.article.service";
import {NewsArticleService} from "../../../../service/backend/news.article.service";

@Component({
  selector: 'app-navbar-collapse-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [
    {provide: AbstractArticleService, useClass: NewsArticleService}
  ]
})
export class NewsComponent implements OnInit {

  type = ArticleType.women;
  service;

  constructor(abstractBackendService: AbstractArticleService) {
    this.service = abstractBackendService;
  }

  ngOnInit() {
  }

}
