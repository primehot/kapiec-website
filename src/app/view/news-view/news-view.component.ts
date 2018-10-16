import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../emun/article-type';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css'],
})
export class NewsViewComponent implements OnInit {
  articleType = ArticleType.news;

  constructor() {
  }

  ngOnInit() {
  }
}
