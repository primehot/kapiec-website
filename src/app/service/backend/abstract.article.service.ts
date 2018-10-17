import {Injectable} from '@angular/core';
import {ArticlePage} from "../../dto/article-page";
import {Observable} from "rxjs/index";
import {Article} from "../../dto/article";
import {ArticleTopic} from "../../dto/article-topic";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractArticleService {

  abstract getPage(page, size): Observable<ArticlePage>;

  abstract getPageByTopic(topicId: any, page: any, size: any): Observable<ArticlePage>;

  abstract getArticle(id): Observable<Article>;

  abstract getTopics(): Observable<ArticleTopic>;

  abstract getImage(id): string;
}
