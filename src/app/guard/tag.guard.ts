import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {pageSize} from "../service/util/page.config";
import {TableService} from "../service/backend/table.service";
import {TagPageDecorator} from "../domain/decorator/tag.page.decorator";

@Injectable({
  providedIn: 'root',
})
export class TagGuard implements Resolve<TagPageDecorator> {
  constructor(private ts: TableService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TagPageDecorator> | Observable<never> {
    let id = route.paramMap.get('tagId');
    console.log("Tag guard");

    return this.ts.getPageByTag(id, 0, pageSize).pipe(
      take(1),
      mergeMap(articlePage => {
        if (articlePage) {
          let td = new TagPageDecorator();
          td.tagId = id;
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
