import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleType} from "../../../domain/emun/article.type";
import {NamingService} from "../../../service/backend/naming.service";

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {
  articleType: ArticleType;
  topicId;
  topic;

  constructor(private route: ActivatedRoute,
              private namingService: NamingService) {
  }

  ngOnInit() {
    this.articleType = this.route.snapshot.data.articleType;
    this.topicId = this.route.snapshot.paramMap.get('id');
    this.namingService.getTopic(this.articleType, this.topicId).subscribe(next => this.topic = next.name);
  }
}
