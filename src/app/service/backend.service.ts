import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Article} from '../dto/article';
import {ArticlePage} from '../dto/article-page';
import {ArticleType} from '../emun/article-type';
import {ArticleTopic} from '../dto/article-topic';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private serverHost = 'http://localhost';
  private serverPort = '8080';
  private serverUrl = this.serverHost + ':' + this.serverPort;

  private newsUrl = this.serverUrl + '/news';
  private womanUrl = this.serverUrl + '/woman';

  constructor(private http: HttpClient) {
  }

  getPage(articleType, page, size): Observable<ArticlePage> {
    switch (articleType) {
      case ArticleType.news: {
        return this.getPageRequest(this.newsUrl, page, size);
      }
      case ArticleType.woman: {
        return this.getPageRequest(this.womanUrl, page, size);
      }
      default: {
        break;
      }
    }
  }

  getArticle(articleType, id): Observable<Article> {
    switch (articleType) {
      case ArticleType.news: {
        return this.http.get<Article>(`${this.newsUrl}/${id}`);
      }
      case ArticleType.woman: {
        return this.http.get<Article>(`${this.womanUrl}/${id}`);
      }
      default: {
        break;
      }
    }
  }

  getTopics(articleType): Observable<ArticleTopic> {
    switch (articleType) {
      case ArticleType.news: {
        return this.http.get<ArticleTopic>(`${this.newsUrl}/topics`);
      }
      case ArticleType.woman: {
        return this.http.get<ArticleTopic>(`${this.womanUrl}/topics`);
      }
      default: {
        break;
      }
    }
  }

  geImage(articleType, id): string {
    switch (articleType) {
      case ArticleType.news: {
        return this.getImageLink(this.newsUrl, id);
      }
      case ArticleType.woman: {
        return this.getImageLink(this.womanUrl, id);
      }
      default: {
        break;
      }
    }
  }

  getImageLink(url, id) {
    return `${url}/${id}/image`;
  }

  getPageRequest(url, page, size) {
    return this.http.get<ArticlePage>(`${url}?page=${page}&size=${size}`);
  }
}
