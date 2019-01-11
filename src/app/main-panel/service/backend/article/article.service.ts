import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {ArticleType} from "../../../domain/emun/article.type";
import {getUrl} from "../../../../url.config";
import {HttpClient} from "@angular/common/http";
import {Article} from "../../../domain/dto/article/article";

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
