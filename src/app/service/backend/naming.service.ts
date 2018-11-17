import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getUrl} from "../util/url.config";
import {ArticleTopic} from "../../domain/dto/article.topic";
import {Observable} from "rxjs/index";
import {ArticleType} from "../../domain/emun/article.type";
import {ArticleTag} from "../../domain/dto/article.tag";

@Injectable({
  providedIn: 'root'
})
export class NamingService {

  constructor(private http: HttpClient) {
  }

  getTopic(articleType: ArticleType, id): Observable<ArticleTopic> {
    return this.http.get<ArticleTopic>(`${getUrl(articleType)}/topics/${id}`);
  }

  getTag(id): Observable<ArticleTag> {
    return this.http.get<ArticleTag>(`${getUrl(ArticleType.tags)}/${id}/name`);
  }
}
