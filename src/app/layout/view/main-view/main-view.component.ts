import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../../domain/emun/article.type';
import {MainArticleService} from "../../../service/backend/main.article.service";
import {ArticleShort} from "../../../domain/dto/article.short";
import {NewsArticleService} from "../../../service/backend/news.article.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css', '../bootstrap.view.scss']
})
export class MainViewComponent implements OnInit {
  newsType = ArticleType.news;
  womenType = ArticleType.women;

  mainArticle: ArticleShort;
  mainItems: ArticleShort[];
  recommendedNews: ArticleShort[];
  recommendedWomen: ArticleShort[];

  constructor(private service: MainArticleService,
              private newsService: NewsArticleService) {
    this.service.getMainArticles().subscribe(next => {
      this.mainArticle = next.mainArticle;
      this.mainItems = next.mainItems;
      this.recommendedNews = next.recommendedNews;
      this.recommendedWomen = next.recommendedWomen;
    })
  }

  getImage(id) {
    return this.newsService.getImage(id);
  }

  ngOnInit() {
  }
}
