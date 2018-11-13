import { Component, OnInit } from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article.type";
import {AbstractArticleService} from "../../../../service/backend/abstract.article.service";
import {WomenArticleService} from "../../../../service/backend/women.article.service";

@Component({
  selector: 'app-navbar-collapse-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
  providers: [
    { provide: AbstractArticleService, useClass: WomenArticleService }
  ]
})
export class WomanComponent implements OnInit {

  type = ArticleType.women;
  service;

  constructor(abstractBackendService: AbstractArticleService) {
    this.service = abstractBackendService;
  }

  ngOnInit() {
  }

}
