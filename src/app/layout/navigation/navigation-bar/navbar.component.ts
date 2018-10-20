import { Component, OnInit } from '@angular/core';
import {NavbarCollapseService} from '../../../service/collapse/navbar.collapse.service';
import {ArticleType} from "../../../domain/emun/article-type";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  news = ArticleType.news;
  women = ArticleType.women;
  dream = ArticleType.dream;

  constructor(private navbarCollapseServiceService: NavbarCollapseService) { }

  ngOnInit() {
  }

  navNewsMouseEnter() {
   this.navbarCollapseServiceService.showNewsEvent(true);
  }
  navNewsMouseLeave() {
    this.navbarCollapseServiceService.showNewsEvent(false);
  }

  navDreamsMouseEnter() {
    this.navbarCollapseServiceService.showDreamsEvent(true);
  }
  navDreamsMouseLeave() {
    this.navbarCollapseServiceService.showDreamsEvent(false);
  }

  navWomanMouseEnter() {
    this.navbarCollapseServiceService.showWomanEvent(true);
  }
  navWomanMouseLeave() {
    this.navbarCollapseServiceService.showWomanEvent(false);
  }
}
