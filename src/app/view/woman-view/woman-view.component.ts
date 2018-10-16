import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../emun/article-type';

@Component({
  selector: 'app-woman-view',
  templateUrl: './woman-view.component.html',
  styleUrls: ['./woman-view.component.css']
})
export class WomanViewComponent implements OnInit {
  articleType = ArticleType.woman;

  constructor() {
  }

  ngOnInit() {
  }

}
