import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class NavbarCollapseServiceService {

  // Observable string sources
  private showNewsCollapse = new Subject<boolean>();
  private showDreamsCollapse = new Subject<boolean>();
  private showWomanCollapse = new Subject<boolean>();

  // Observable boolean streams
  showNewsCollapse$ = this.showNewsCollapse.asObservable();
  showDreamsCollapse$ = this.showDreamsCollapse.asObservable();
  showWomanCollapse$ = this.showWomanCollapse.asObservable();

  // Service message commands
  showNewsEvent(mission: boolean) {
    this.showNewsCollapse.next(mission);
  }

  showDreamsEvent(mission: boolean) {
    this.showDreamsCollapse.next(mission);
  }

  showWomanEvent(mission: boolean) {
    this.showWomanCollapse.next(mission);
  }
}
