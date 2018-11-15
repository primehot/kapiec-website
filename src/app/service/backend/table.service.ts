import {Injectable} from '@angular/core';
import {ArticlePage} from "../../domain/dto/article.page";
import {Observable} from "rxjs/index";
import {ArticleType} from "../../domain/emun/article.type";
import {getUrl, urlConfig} from "../util/url.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {
  }

  getPage(articleType: ArticleType, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${getUrl(articleType)}?page=${page}&size=${size}`);
  }

  getPageByTopic(articleType: ArticleType, topicId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${getUrl(articleType)}/by-topics/${topicId}/?page=${page}&size=${size}`);
  }

  getPageByTag(topicId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${urlConfig.tagsUrl}/${topicId}?page=${page}&size=${size}`);
  }

}
