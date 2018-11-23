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
  topicId;
  topic;

  constructor(private route: ActivatedRoute,
              private namingService: NamingService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { articleType: ArticleType }) => {
        this.namingService.getTopic(data.articleType, this.topicId).subscribe(next => this.topic = next.name);
      });

  }
}
