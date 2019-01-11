import {Component, OnInit} from '@angular/core';
import {Article} from "../../../main-panel/domain/dto/article/article";
import {ArticleType} from "../../../main-panel/domain/emun/article.type";
import {ArticleCategory} from "../../../main-panel/domain/dto/article/article.category";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  article: Article;
  paragraphs = [];
  articleTypes;

  constructor() {
    this.articleTypes = [ArticleType.news, ArticleType.women, ArticleType.dream, ArticleType.dreambook]
  }

  ngOnInit() {
    this.article = new Article();
    this.article.articleCategory = new ArticleCategory();
    this.article.articleCategory.name = ArticleType.news;
  }

  addParagraph() {
    this.paragraphs.push({content: ""});
  }

  removeParagraph() {
    if (this.paragraphs.length > 1) {
      this.paragraphs.pop();
    }
  }

}
