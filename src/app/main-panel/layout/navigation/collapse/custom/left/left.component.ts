import {Component, Input, OnInit} from '@angular/core';
import {ArticleType, getNavigationNameByType} from "../../../../../domain/emun/article.type";
import {ArticleTopic} from "../../../../../domain/dto/article/article.topic";
import {hideCollapse} from "../../../../../../jquery";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  @Input() type: ArticleType;
  @Input() topics: ArticleTopic[];

  constructor() { }

  ngOnInit() {
  }

  isArticle() {
    return this.type !== ArticleType.dream;
  }

  getNavigationName() {
    return getNavigationNameByType(this.type);
  }

  hide() {
    hideCollapse(this.type);
  }
}
