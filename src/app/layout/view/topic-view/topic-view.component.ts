import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WomenArticleService} from "../../../service/backend/women.article.service";
import {NewsArticleService} from "../../../service/backend/news.article.service";
import {AbstractArticleService} from "../../../service/backend/abstract.article.service";
import {ArticleType} from "../../../domain/emun/article.type";

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {
  articleType: ArticleType;
  service: AbstractArticleService;
  topicId;
  topic;

  constructor(private route: ActivatedRoute,
              private newsArticleService: NewsArticleService,
              private womenArticleService: WomenArticleService) {
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

  ngOnInit() {
    this.articleType = this.route.snapshot.data.articleType;
    this.topicId = this.route.snapshot.paramMap.get('id');
    this.service = this.getService(this.articleType);
    this.service.getTopic(this.topicId).subscribe(next => this.topic = next.name);
  }

}
