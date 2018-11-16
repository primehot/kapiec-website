import {Component, Input, OnInit} from '@angular/core';
import {ArticleType, getNavigationNameByType} from "../../../domain/emun/article.type";

@Component({
  selector: 'app-table-navigation',
  templateUrl: './table-navigation.component.html',
  styleUrls: ['./table-navigation.component.css']
})
export class TableNavigationComponent implements OnInit {
  @Input() articleType: ArticleType;
  @Input() topicId?: number;
  @Input() tagId?: number;
  @Input() topic?: string;
  articleTypeName: string;

  constructor() {
  }

  ngOnInit() {
    this.articleTypeName = getNavigationNameByType(this.articleType);
  }

}
