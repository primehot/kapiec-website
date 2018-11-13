import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../../domain/emun/article.type';
import {WomenArticleService} from "../../../service/backend/women.article.service";
import {AbstractArticleService} from "../../../service/backend/abstract.article.service";

@Component({
  selector: 'app-woman-view',
  templateUrl: './woman-view.component.html',
  styleUrls: ['./woman-view.component.css'],
  providers: [
    { provide: AbstractArticleService, useClass: WomenArticleService }
  ]
})
export class WomanViewComponent implements OnInit {
  articleType = ArticleType.women;
  abstractBackendService;

  constructor(abstractBackendService: AbstractArticleService) {
    this.abstractBackendService = abstractBackendService;
  }

  ngOnInit() {
  }

}
