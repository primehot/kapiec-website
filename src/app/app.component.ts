import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {addJqueryLogic} from "./jquery";
import {ArticleType} from "./domain/emun/article.type";
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dream = ArticleType.dream;
  news = ArticleType.news;
  women = ArticleType.women;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      addJqueryLogic();
    }
    if (isPlatformServer(this.platformId)) {
      // Server only code.
    }
  }
}

