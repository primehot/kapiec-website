import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {getUrl, urlConfig} from "../../util/url.config";
import {HttpClient} from "@angular/common/http";
import {ArticleType} from "../../../domain/emun/article.type";
import {ArticlePage} from "../../../domain/dto/article/article.page";

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

  getPageByTag(tagId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${urlConfig.tagsUrl}/${tagId}?page=${page}&size=${size}`);
  }

}
