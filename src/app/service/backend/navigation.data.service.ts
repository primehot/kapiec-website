import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {ArticleNavigation} from "../../domain/dto/article.navigation";
import {ArticleType} from "../../domain/emun/article.type";
import {getUrl} from "../util/url.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NavigationDataService {

  constructor(private http: HttpClient) {
  }

  getNavigationData(articleType: ArticleType): Observable<ArticleNavigation> {
    return this.http.get<ArticleNavigation>(`${getUrl(articleType)}/navbar`);
  }
}
