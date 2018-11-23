import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {pageSize} from "../service/util/page.config";
import {TableService} from "../service/backend/table.service";
import {ArticlePage} from "../domain/dto/article/article.page";
import {TopicPageDecorator} from "../domain/decorator/topic.page.decorator";

@Injectable({
  providedIn: 'root',
})
export class TopicGuard implements Resolve<TopicPageDecorator> {
  constructor(private ts: TableService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TopicPageDecorator > | Observable<never> {
    let id = route.paramMap.get('topicId');
    let articleType = route.data.articleType;

    return this.ts.getPageByTopic(articleType, id, 0, pageSize).pipe(
      take(1),
      mergeMap(articlePage => {
        if (articlePage) {
          let td = new TopicPageDecorator();
          td.topicId = id;
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
