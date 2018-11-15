import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Article} from "../../domain/dto/article";
import {ArticleType} from "../../domain/emun/article.type";
import {getUrl} from "../util/url.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(articleType: ArticleType, id): Observable<Article> {
    return this.http.get<Article>(`${getUrl(articleType)}/${id}`);
  }

}
