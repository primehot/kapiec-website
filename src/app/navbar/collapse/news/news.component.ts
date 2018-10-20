import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../emun/article-type";
import {NewsArticleService} from "../../../service/backend/news.article.service";

@Component({
  selector: 'app-navbar-collapse-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  type = ArticleType.news;

  topics;
  articles;
  seeAlso;
  constructor(private newsArticleService: NewsArticleService) {
  }

  ngOnInit() {
    this.newsArticleService.getNavigationData().pipe().subscribe(navData => {
      this.topics = navData.topics;
      this.articles = navData.articles;
      this.seeAlso = navData.seeAlso;
      console.log(navData);
    });
  }

}
