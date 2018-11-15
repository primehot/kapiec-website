import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article.type";

@Component({
  selector: 'app-navbar-collapse-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  type = ArticleType.news;

  ngOnInit() {
  }

}
