import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {getUrl} from "../../util/url.config";
import {HttpClient} from "@angular/common/http";
import {ArticleAdditional} from "../../../domain/dto/article/article.additional";
import {ArticleType} from "../../../domain/emun/article.type";

@Injectable({
  providedIn: 'root'
})
export class AdditionalDataService {

  constructor(private http: HttpClient) {
  }

  getAdditionalArticle(articleType: ArticleType): Observable<ArticleAdditional> {
    return this.http.get<ArticleAdditional>(`${getUrl(articleType)}/additional`);
  }

  getAdditionalArticleByTopic(articleType: ArticleType, topicId): Observable<ArticleAdditional> {
    return this.http.get<ArticleAdditional>(`${getUrl(articleType)}/additional/topic/${topicId}`);
  }

  getAdditionalArticleByTag(articleType: ArticleType, tagId): Observable<ArticleAdditional> {
    return this.http.get<ArticleAdditional>(`${getUrl(articleType)}/${tagId}/additional`);
  }
}
