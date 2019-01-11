import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {ArticleType} from "../../main-panel/domain/emun/article.type";
import {getUrl} from "../../url.config";
import {ArticleTag} from "../../main-panel/domain/dto/article/article.tag";
import {ArticleTopic} from "../../main-panel/domain/dto/article/article.topic";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) {
  }

  getTags(): Observable<ArticleTag[]> {
    return this.http.get<ArticleTag[]>(`${getUrl(ArticleType.tags)}`);
  }

  getTopics(articleType: ArticleType): Observable<ArticleTopic[]> {
    return this.http.get<ArticleTopic[]>(`${getUrl(articleType)}/topics`);
  }

}
