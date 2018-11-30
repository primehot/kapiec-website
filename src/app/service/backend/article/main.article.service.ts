import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {urlConfig} from "../../util/url.config";
import {MainArticles} from "../../../domain/dto/article/main-articles";

@Injectable({
  providedIn: 'root'
})
export class MainArticleService {

  constructor(private http: HttpClient) {
  }

  getMainArticles(): Observable<MainArticles> {
    return this.http.get<MainArticles>(`${urlConfig.mainUrl}`);
  }

}
