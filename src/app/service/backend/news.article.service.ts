import {Injectable} from '@angular/core';
import {AbstractArticleService} from "./abstract.article.service";
import {Observable} from "rxjs/index";
import {ArticlePage} from "../../dto/article-page";
import {Article} from "../../dto/article";
import {ArticleTopic} from "../../dto/article-topic";
import {HttpClient} from "@angular/common/http";
import {UrlConfig} from "../url.config";

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService implements AbstractArticleService {

  constructor(private http: HttpClient) {
  }

  getPage(page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${UrlConfig.newsUrl}?page=${page}&size=${size}`);
  }

  getPageByTopic(topicId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${UrlConfig.newsUrl}?topicId=${topicId}?page=${page}&size=${size}`);
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(`${UrlConfig.newsUrl}/${id}`);
  }

  getTopics(): Observable<ArticleTopic> {
    return this.http.get<ArticleTopic>(`${UrlConfig.newsUrl}/topics`);
  }

  getImage(id): string {
    return `${UrlConfig.newsUrl}/${id}/image`;
  }

}