import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getUrl} from "../util/url.config";
import {Observable} from "rxjs/index";
import {ArticleType} from "../../domain/emun/article.type";
import {ArticleTopic} from "../../domain/dto/article/article.topic";
import {ArticleTag} from "../../domain/dto/article/article.tag";

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
