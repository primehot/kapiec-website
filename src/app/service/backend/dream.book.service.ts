import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {DreamBook, DreamBookTitlePage} from "../../domain/dto/dream_book/dream.book";
import {getUrl} from "../util/url.config";
import {ArticleType} from "../../domain/emun/article.type";

@Injectable({
  providedIn: 'root'
})
export class DreamBookService {

  constructor(private http: HttpClient) {
  }

  getDreamBookDataByTitle(title): Observable<DreamBookTitlePage> {
    return this.http.get<DreamBookTitlePage>(`${getUrl(ArticleType.dream)}/title?name=${title}`);
  }
}
