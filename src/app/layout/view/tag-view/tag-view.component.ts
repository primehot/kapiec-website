import { Component, OnInit } from '@angular/core';
import {TagsArticleService} from "../../../service/backend/tags.article.service";

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.css']
})
export class TagViewComponent implements OnInit {

  constructor(private service: TagsArticleService) { }

  ngOnInit() {
  }

}
