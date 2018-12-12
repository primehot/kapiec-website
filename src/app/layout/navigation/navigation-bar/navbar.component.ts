import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {hideCollapse} from "../../../jquery";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  news = ArticleType.news;
  women = ArticleType.women;
  dream = ArticleType.dream;

  inputValue: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  hideNews() {
    hideCollapse(this.news);
  }

  hideWomen() {
    hideCollapse(this.women);
  }

  hideDream() {
    hideCollapse(this.dream);
  }

  onEnterPress() {
    this.router.navigate(['/' + ArticleType.search, this.inputValue]);
    this.inputValue = "";
  }
}
