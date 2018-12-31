import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {pageSize} from "../service/util/page.config";
import {TableService} from "../service/backend/article/table.service";
import {ArticlePage} from "../domain/dto/article/article.page";
import {scrollTop} from "../jquery";

@Injectable({
  providedIn: 'root',
})
export class CategoryGuard implements Resolve<ArticlePage> {
  constructor(private ts: TableService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticlePage> | Observable<never> {
    let articleType = route.data.articleType;

    return this.ts.getPage(articleType, 1, pageSize).pipe(
      take(1),
      mergeMap(articlePage => {
        if (articlePage) {
          scrollTop(300);
          return of(articlePage);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
