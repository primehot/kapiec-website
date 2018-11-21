import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from "../../../../../domain/emun/article.type";
import {hideCollapse} from "../../../../../jquery";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  @Input() type;
  @Input() seeAlso;
  @Input() mostCommented;
  @Input() dreamBookSeeAlso;

  constructor() { }

  ngOnInit() {
  }

  isArticle() {
    return this.type !== ArticleType.dream;
  }

  hide() {
    hideCollapse(this.type);
  }

}
