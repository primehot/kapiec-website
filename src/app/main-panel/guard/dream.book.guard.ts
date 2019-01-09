import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {scrollTop} from "../../jquery";
import {DreamBookService} from "../service/backend/dream.book.service";
import {DreamBookTitlePage} from "../domain/dto/dream_book/dream.book";

@Injectable({
  providedIn: 'root',
})
export class DreamBookGuard implements Resolve<DreamBookTitlePage> {
  constructor(private dbs: DreamBookService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DreamBookTitlePage> | Observable<never> {
    let title = route.paramMap.get('title');

    console.log("DreamBook guard");

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
