import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Article} from '../dto/article';
import {ArticlePage} from '../dto/article-page';
import {ArticleType} from '../emun/article-type';
import {ArticleTopic} from '../dto/article-topic';
import {UrlConfig} from "./url.config";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getPage(articleType, page, size): Observable<ArticlePage> {
    switch (articleType) {
      case ArticleType.news: {
        return this.getPageRequest(UrlConfig.newsUrl, page, size);
      }
      case ArticleType.women: {
        return this.getPageRequest(UrlConfig.womenUrl, page, size);
      }
      default: {
        break;
      }
    }
  }

  getPageByTopic(articleType, topicId, page, size): Observable<ArticlePage> {
    switch (articleType) {
      case ArticleType.news: {
        return this.getPageRequestByTopic(UrlConfig.newsUrl, topicId, page, size);
      }
      case ArticleType.women: {
        return this.getPageRequestByTopic(UrlConfig.womenUrl, topicId, page, size);
      }
      default: {
        break;
      }
    }
  }

  getArticle(articleType, id): Observable<Article> {
    switch (articleType) {
      case ArticleType.news: {
        return this.http.get<Article>(`${UrlConfig.newsUrl}/${id}`);
      }
      case ArticleType.women: {
        return this.http.get<Article>(`${UrlConfig.womenUrl}/${id}`);
      }
      default: {
        break;
      }
    }
  }

  getTopics(articleType): Observable<ArticleTopic> {
    switch (articleType) {
      case ArticleType.news: {
        return this.http.get<ArticleTopic>(`${UrlConfig.newsUrl}/topics`);
      }
      case ArticleType.women: {
        return this.http.get<ArticleTopic>(`${UrlConfig.womenUrl}/topics`);
      }
      default: {
        break;
      }
    }
  }

  getImage(articleType, id): string {
    switch (articleType) {
      case ArticleType.news: {
        return this.getImageLink(UrlConfig.newsUrl, id);
      }
      case ArticleType.women: {
        return this.getImageLink(UrlConfig.womenUrl, id);
      }
      default: {
        break;
      }
    }
  }

  private getImageLink(url, id) {
    return `${url}/${id}/image`;
  }

  private getPageRequestByTopic(url, topicId, page, size) {
    return this.http.get<ArticlePage>(`${url}?topicId=${topicId}?page=${page}&size=${size}`);
  }

  private getPageRequest(url, page, size) {
    return this.http.get<ArticlePage>(`${url}?page=${page}&size=${size}`);
  }
}
