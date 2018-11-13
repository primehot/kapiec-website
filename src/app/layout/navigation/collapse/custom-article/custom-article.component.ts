import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article.type";
import {AbstractArticleService} from "../../../../service/backend/abstract.article.service";

@Component({
  selector: 'app-custom-article',
  templateUrl: './custom-article.component.html',
  styleUrls: ['./custom-article.component.css']
})
export class CustomArticleComponent implements OnInit {

  @Input() articleService: AbstractArticleService;
  @Input() type: ArticleType;

  topics;
  articles;
  seeAlso;
  mostCommented;

  constructor() { }

  ngOnInit() {
    this.articleService.getNavigationData().pipe().subscribe(navData => {
      this.topics = navData.topics;
      this.articles = navData.articles;
      this.seeAlso = navData.seeAlso;
      this.mostCommented = navData.mostCommented;
      console.log(navData);
    });
  }

  getImage(id) {
    return this.articleService.getImage(id);
  }
}
