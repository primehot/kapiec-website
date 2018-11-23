import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import {Article} from "../domain/dto/article/article";
import {ArticleService} from "../service/backend/article.service";
import {TopicPageDecorator} from "../domain/decorator/topic.page.decorator";
import {scrollTop} from "../jquery";

@Injectable({
  providedIn: 'root',
})
export class ArticleGuard implements Resolve<Article> {
  constructor(private as: ArticleService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> | Observable<never> {
    let id = route.paramMap.get('id');
    let articleType = route.data.articleType;

    return this.as.getArticle(articleType, id).pipe(
      take(1),
      mergeMap(article => {
        if (article) {
          scrollTop(300);
          return of(article);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
