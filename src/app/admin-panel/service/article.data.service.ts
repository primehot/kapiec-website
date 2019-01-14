import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {ArticleType} from "../../main-panel/domain/emun/article.type";
import {getAdministrationUrl, getUrl} from "../../url.config";
import {ArticleTag} from "../../main-panel/domain/dto/article/article.tag";
import {ArticleTopic} from "../../main-panel/domain/dto/article/article.topic";
import {ArticleDraft} from "../domain/article.draft";

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

  postDraftArticle(articleType: string, articleDraft: ArticleDraft, mainImage: File): Observable<ArticleDraft> {
    let formData = new FormData();
    formData.append('mainImage', mainImage);
    formData.append('article', new Blob([JSON.stringify(articleDraft)],{ type: "application/json"}));

    return this.http.post<ArticleDraft>(`${getAdministrationUrl()}/${articleType}/draft`, formData);
  }

}
