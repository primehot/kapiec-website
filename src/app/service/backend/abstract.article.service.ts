import {Injectable} from '@angular/core';
import {ArticlePage} from "../../domain/dto/article.page";
import {Observable} from "rxjs/index";
import {Article} from "../../domain/dto/article";
import {ArticleTopic} from "../../domain/dto/article.topic";
import {ArticleNavigation} from "../../domain/dto/article.navigation";
import {ArticleShort} from "../../domain/dto/article.short";
import {ArticleAdditional} from "../../domain/dto/article.additional";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractArticleService {

  abstract getPage(page, size): Observable<ArticlePage>;

  abstract getPageByTopic(topicId: any, page: any, size: any): Observable<ArticlePage>;

  abstract getArticle(id): Observable<Article>;

  abstract getNavigationData(): Observable<ArticleNavigation>;

  abstract getImage(id): string;

  abstract getAdditionalArticleData(): Observable<ArticleAdditional>;
}
