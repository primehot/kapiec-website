import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../emun/article-type";

@Component({
  selector: 'app-navbar-collapse-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  type = ArticleType.news;

  topics = ['topic1', 'topic 2'];

  twoNews = ['news 1', 'news 2'];

  alsoSee = ['also see 1', 'also see '];

  constructor() {

  }

  ngOnInit() {
  }

}
