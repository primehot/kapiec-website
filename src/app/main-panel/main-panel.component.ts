import { Component, OnInit } from '@angular/core';
import {addJqueryLogic} from "../jquery";
import {ArticleType} from "./domain/emun/article.type";

@Component({
  selector: '[app-main-panel]',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  dream = ArticleType.dream;
  news = ArticleType.news;
  women = ArticleType.women;

  constructor() {
    addJqueryLogic();
  }

  ngOnInit() {
  }

}
