import {Injectable} from '@angular/core';
import {AbstractArticleService} from "./abstract.article.service";
import {Observable} from "rxjs/index";
import {ArticlePage} from "../../dto/article.page";
import {Article} from "../../dto/article";
import {HttpClient} from "@angular/common/http";
import {UrlConfig} from "../url.config";
import {ArticleNavigation} from "../../dto/article.navigation";

@Injectable({
  providedIn: 'root'
})
export class WomenArticleService implements AbstractArticleService {

  constructor(private http: HttpClient) {
  }

  getPage(page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${UrlConfig.womenUrl}?page=${page}&size=${size}`);
  }

  getPageByTopic(topicId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${UrlConfig.womenUrl}/by-topics/${topicId}/?page=${page}&size=${size}`);
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(`${UrlConfig.womenUrl}/${id}`);
  }

  getNavigationData(): Observable<ArticleNavigation> {
    return this.http.get<ArticleNavigation>(`${UrlConfig.womenUrl}/navbar`);
  }

  getImage(id): string {
    return `${UrlConfig.womenUrl}/${id}/image`;
  }
}
