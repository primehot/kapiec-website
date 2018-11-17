import { Component, OnInit } from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {ActivatedRoute} from "@angular/router";
import {NamingService} from "../../../service/backend/naming.service";

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.css']
})
export class TagViewComponent implements OnInit {

  articleType = ArticleType.tags;
  tagId;
  tag;

  constructor(private route: ActivatedRoute,
              private namingService: NamingService) {
  }

  ngOnInit() {
    this.tagId = this.route.snapshot.paramMap.get('id');
    this.namingService.getTag(this.tagId).subscribe(next => this.tag = next.name);
  }

}
