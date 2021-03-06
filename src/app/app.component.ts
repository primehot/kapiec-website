import {Component} from '@angular/core';
import {addJqueryLogic, scrollTop} from "./jquery";
import {$} from "protractor";
import {ArticleType} from "./main-panel/domain/emun/article.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dream = ArticleType.dream;
  news = ArticleType.news;
  women = ArticleType.women;

  constructor() {
    addJqueryLogic();
  }
}

