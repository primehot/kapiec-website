import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {urlConfig} from "../util/url.config";
import {ArticlePage} from "../../domain/dto/article.page";

@Injectable({
  providedIn: 'root'
})
export class TagsArticleService {

  constructor(private http: HttpClient) {
  }

  getPageByTag(tagId, page, size): Observable<ArticlePage> {
    return this.http.get<ArticlePage>(`${urlConfig.tagsUrl}/${tagId}?page=${page}&size=${size}`);
  }

}
