import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleType} from "../../../domain/emun/article.type";
import {TopicService} from "../../../service/backend/topic.service";

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
              private topicService: TopicService) {
  }

  ngOnInit() {
    this.articleType = this.route.snapshot.data.articleType;
    this.topicId = this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(this.articleType, this.topicId).subscribe(next => this.topic = next.name);
  }
}
