import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {scrollTop} from "../jquery";
import {DreamBookService} from "../service/backend/dream.book.service";
import {DreamBookTitlePage} from "../domain/dto/dream_book/dream.book";

@Injectable({
  providedIn: 'root',
})
export class DreamBookSearchGuard implements Resolve<DreamBookTitlePage> {
  constructor(private dbs: DreamBookService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DreamBookTitlePage> | Observable<never> {
    let title = route.paramMap.get('phrase');

    console.log("DreamBook guard");

    return this.dbs.getDreamBookDataByPhrase(title).pipe(
      take(1),
      mergeMap(dreamBooks => {
        if (dreamBooks) {
          scrollTop(300);
          let dp = new DreamBookTitlePage();
          dp.title = title;
          dp.dreamBooks = dreamBooks;
          return of(dp);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
