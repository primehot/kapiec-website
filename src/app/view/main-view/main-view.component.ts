import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../emun/article-type';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  articleType = ArticleType.news;

  constructor() {
  }

  ngOnInit() {
  }
}
