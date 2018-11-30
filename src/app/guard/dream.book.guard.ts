import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {pageSize} from "../service/util/page.config";
import {TableService} from "../service/backend/article/table.service";
import {ArticlePage} from "../domain/dto/article/article.page";
import {TopicPageDecorator} from "../domain/decorator/topic.page.decorator";
import {scrollTop} from "../jquery";
import {DreamBookService} from "../service/backend/dream.book.service";
import {DreamBook, DreamBookTitlePage} from "../domain/dto/dream_book/dream.book";

@Injectable({
  providedIn: 'root',
})
export class DreamBookGuard implements Resolve<DreamBookTitlePage> {
  constructor(private dbs: DreamBookService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DreamBookTitlePage> | Observable<never> {
    let title = route.paramMap.get('title');

    return this.dbs.getDreamBookDataByTitle(title).pipe(
      take(1),
      mergeMap(dreamBookTitlePage => {
        if (dreamBookTitlePage) {
          scrollTop(300);
          return of(dreamBookTitlePage);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
