import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from "../../../main-panel/domain/dto/article/article";
import {ArticleType} from "../../../main-panel/domain/emun/article.type";
import {ArticleCategory} from "../../../main-panel/domain/dto/article/article.category";
import {ArticleDataService} from "../../service/article.data.service";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ArticleTag} from "../../../main-panel/domain/dto/article/article.tag";
import {ArticleTopic} from "../../../main-panel/domain/dto/article/article.topic";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit, OnDestroy {

  article: Article;
  paragraphs = [];
  articleTypes;

  private componentDestroyed: Subject<any> = new Subject();
  private tags: ArticleTag[];

  private topics: ArticleTopic[];
  private newsTopic: ArticleTopic[];
  private womenTopic: ArticleTopic[];

  constructor(private articleDataService: ArticleDataService) {
    this.articleTypes = [ArticleType.news, ArticleType.women, ArticleType.dream, ArticleType.dreambook]
  }

  ngOnInit() {
    this.article = new Article();
    this.article.articleCategory = new ArticleCategory();
    this.article.articleCategory.name = ArticleType.news;

    this.article.hashTags = [];

    this.articleDataService.getTags().pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.tags = next);
    this.articleDataService.getTopics(ArticleType.news).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.topics = this.newsTopic = next);
    this.articleDataService.getTopics(ArticleType.women).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.womenTopic = next);
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  addParagraph() {
    this.paragraphs.push({content: ""});
  }

  removeParagraph() {
    if (this.paragraphs.length > 1) {
      this.paragraphs.pop();
    }
  }

  articleTypeChange(event) {
    switch (event.value) {
      case ArticleType.news:
        this.topics = this.newsTopic;
        break;
      case ArticleType.women:
        this.topics = this.womenTopic;
        console.log(this.topics);
        break;
      default:
        this.topics = null;
    }
  }

  checkHashTag(event, hashTag) {
    if(event === true) {
      this.article.hashTags.push(hashTag);
    } else {
      let index = this.article.hashTags.indexOf(hashTag);
      if (index > -1) {
        this.article.hashTags.splice(index, 1);
      }
    }
  }

  topicChange(event) {
    this.article.topic = event.value.value;
    console.log(this.article);
  }

}
