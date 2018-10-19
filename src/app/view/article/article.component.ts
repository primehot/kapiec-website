import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../dto/article';
import {NewsArticleService} from "../../service/backend/news.article.service";
import {WomenArticleService} from "../../service/backend/women.article.service";
import {ArticleType} from "../../emun/article-type";
import {AbstractArticleService} from "../../service/backend/abstract.article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {

  article: Article;
  imageSrc: string;
  service: AbstractArticleService;

  constructor(private route: ActivatedRoute,
              private newsArticleService: NewsArticleService,
              private womenArticleService: WomenArticleService) { }

  ngOnInit() {
    const articleType = this.route.snapshot.data.articleType;
    this.service = this.getService(articleType);
    this.getArticle();
  }

  getService(articleType: ArticleType) {
    switch (articleType) {
      case ArticleType.news:
        return this.newsArticleService;
      case ArticleType.women:
        return this.womenArticleService;
      default:
        return this.newsArticleService;
    }
  }

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getArticle(id).pipe().subscribe(article => {
      this.article = article;
      console.log(article);
    });
    this.imageSrc = this.service.getImage(id);
  }

}
