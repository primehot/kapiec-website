import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Article} from '../dto/article';
import {ArticlePage} from '../dto/article-page';

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

  getNewsImageLink(newsId) {
    this.getImageLink(this.newsUrl, newsId);
  }

  getWomanImageLink(newsId) {
    this.getImageLink(this.womanUrl, newsId);
  }

  getNewsPage(page, size): Observable<ArticlePage> {
    return this.getPage(this.newsUrl, page, size);
  }

  getWomanPage(page, size): Observable<ArticlePage> {
    return this.getPage(this.newsUrl, page, size);
  }

  getImageLink(url, id) {
    return `${url}/${id}/image`;
  }

  getPage(url, page, size) {
    return this.http.get<ArticlePage>(`${url}?page=${page}&size=${size}`);
  }
}
