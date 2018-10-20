import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article-type";

@Component({
  selector: 'app-navbar-collapse-dream',
  templateUrl: './dream.component.html',
  styleUrls: ['./dream.component.css']
})
export class DreamComponent implements OnInit {

  type = ArticleType.dream;

  constructor() {
  }

  ngOnInit() {
  }

}
