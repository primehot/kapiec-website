import {Injectable} from '@angular/core';
import {AbstractArticleService} from "./abstract.article.service";
import {Observable} from "rxjs/index";
import {ArticlePage} from "../../domain/dto/article.page";
import {Article} from "../../domain/dto/article";
import {HttpClient} from "@angular/common/http";
import {UrlConfig} from "../util/url.config";
import {ArticleNavigation} from "../../domain/dto/article.navigation";
import {ArticleShort} from "../../domain/dto/article.short";
import {ArticleAdditional} from "../../domain/dto/article.additional";
import {ArticleTopic} from "../../domain/dto/article.topic";

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService implements AbstractArticleService {

  constructor(private http: HttpClient) {
  }

  getAdditionalArticleData(): Observable<ArticleAdditional> {
    return this.http.get<ArticleAdditional>(`${UrlConfig.newsUrl}/additional`);
  }

  getPage(page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${UrlConfig.newsUrl}?page=${page}&size=${size}`);
  }

  getPageByTopic(topicId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${UrlConfig.newsUrl}/by-topics/${topicId}/?page=${page}&size=${size}`);
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(`${UrlConfig.newsUrl}/${id}`);
  }

  getNavigationData(): Observable<ArticleNavigation> {
    return this.http.get<ArticleNavigation>(`${UrlConfig.newsUrl}/navbar`);
  }

  getImage(id): string {
    return `${UrlConfig.newsUrl}/${id}/image`;
  }

  getTopic(id): Observable<ArticleTopic> {
    return this.http.get<ArticleTopic>(`${UrlConfig.newsUrl}/topics/${id}`);
  }

}
