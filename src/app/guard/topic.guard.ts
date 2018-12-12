import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {pageSize} from "../service/util/page.config";
import {TableService} from "../service/backend/article/table.service";
import {IdentificationPageDecorator} from "../domain/decorator/identification.page.decorator";
import {scrollTop} from "../jquery";

@Injectable({
  providedIn: 'root',
})
export class TopicGuard implements Resolve<IdentificationPageDecorator> {
  constructor(private ts: TableService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IdentificationPageDecorator> | Observable<never> {
    let id = route.paramMap.get('topicId');
    let articleType = route.data.articleType;

    return this.ts.getPageByTopic(articleType, id, 0, pageSize).pipe(
      take(1),
      mergeMap(articlePage => {
        if (articlePage) {
          scrollTop(300);
          let td = new IdentificationPageDecorator();
          td.id = id;
          td.articlePage = articlePage;
          return of(td);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
