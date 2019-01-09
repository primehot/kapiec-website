import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleType, getNavigationNameByType} from "../../../domain/emun/article.type";

@Component({
  selector: 'app-table-navigation',
  templateUrl: './table-navigation.component.html',
  styleUrls: ['./table-navigation.component.css']
})
export class TableNavigationComponent implements OnInit, OnChanges {
  @Input() articleType: ArticleType;
  @Input() topicId?: number;
  @Input() topic?: string;
  @Input() tagId?: number;
  @Input() tag?: string;
  @Input() phrase?: string;
  articleTypeName: string;

  constructor() {
  }

  ngOnInit() {
    this.articleTypeName = getNavigationNameByType(this.articleType);
  }

  ngOnChanges(changes: SimpleChanges) {
    // for (let propName in changes) {
    //   if (changes[propName].currentValue) {
    //     console.log(propName);
    //     console.log(changes[propName]);
    //     switch (propName) {
    //       case "articleType":
    //         this.articleType = changes[propName].currentValue;
    //         break;
    //       case "id":
    //         this.id = changes[propName].currentValue;
    //         break;
    //       case "topic":
    //         this.topic = changes[propName].currentValue;
    //         break;
    //       case "tagId":
    //         this.tagId = changes[propName].currentValue;
    //         break;
    //       case "tag":
    //         this.tag = changes[propName].currentValue;
    //         break;
    //     }
    //     this.articleTypeName = getNavigationNameByType(this.articleType);
    //   }
    // }
  }

}
