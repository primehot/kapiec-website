import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  news = ArticleType.news;
  women = ArticleType.women;
  dream = ArticleType.dream;

  constructor() {
  }

  ngOnInit() {
  }
}
