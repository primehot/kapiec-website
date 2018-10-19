import {Component} from '@angular/core';
import {addJqueryLogic} from "./jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    addJqueryLogic();
  }
}

