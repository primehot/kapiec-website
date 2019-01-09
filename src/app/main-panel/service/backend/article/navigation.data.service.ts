import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {ArticleNavigation, DreamBookNavigation} from "../../../domain/dto/navigation";
import {ArticleType} from "../../../domain/emun/article.type";
import {getUrl} from "../../util/url.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NavigationDataService {

  constructor(private http: HttpClient) {
  }

  getArticleNavigationData(articleType: ArticleType): Observable<ArticleNavigation> {
    return this.http.get<ArticleNavigation>(`${getUrl(articleType)}/navbar`);
  }

  getDreamBookNavigationData(): Observable<DreamBookNavigation> {
    return this.http.get<DreamBookNavigation>(`${getUrl(ArticleType.dream)}/navbar`);
  }
}
