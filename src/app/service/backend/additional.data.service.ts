import {Injectable} from '@angular/core';
import {ArticlePage} from "../../domain/dto/article.page";
import {Observable} from "rxjs/index";
import {Article} from "../../domain/dto/article";
import {ArticleTopic} from "../../domain/dto/article.topic";
import {ArticleNavigation} from "../../domain/dto/article.navigation";
import {ArticleShort} from "../../domain/dto/article.short";
import {ArticleAdditional} from "../../domain/dto/article.additional";
import {ArticleType} from "../../domain/emun/article.type";
import {getUrl} from "../util/url.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdditionalDataService {

  constructor(private http: HttpClient) {
  }

  getAdditionalArticleData(articleType: ArticleType): Observable<ArticleAdditional> {
    return this.http.get<ArticleAdditional>(`${getUrl(articleType)}/additional`);
  }
}
