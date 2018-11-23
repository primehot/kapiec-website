import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ArticleType} from '../../../domain/emun/article.type';
import {ImageService} from "../../../service/backend/image.service";
import {TableService} from "../../../service/backend/table.service";
import {Article} from "../../../domain/dto/article/article";
import {ActivatedRoute} from "@angular/router";
import {NamingService} from "../../../service/backend/naming.service";
import {pageSize} from "../../../service/util/page.config";
import {TopicPageDecorator} from "../../../domain/decorator/topic.page.decorator";
import {TagPageDecorator} from "../../../domain/decorator/tag.page.decorator";
import {ArticlePage} from "../../../domain/dto/article/article.page";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../bootstrap.view.scss']
})
export class TableComponent implements OnInit, OnChanges {
  articleType: ArticleType;
  topicId: string;
  topic: string;
  tagId: string;
  tag: string;

  asyncMeals: Observable<Article[]>;
  p = 1;
  pageSize = pageSize;
  total: number;
  loading: boolean;

  constructor(private imageService: ImageService,
              private tableService: TableService,
              private namingService: NamingService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { articleType: ArticleType, topicPage: TopicPageDecorator, tagPage: TagPageDecorator, categoryPage: ArticlePage }) => {
        this.articleType = data.articleType;
        if (data.topicPage) {
          this.total = data.topicPage.articlePage.totalElements;
          this.asyncMeals = of(data.topicPage.articlePage.items);
          this.topicId = data.topicPage.topicId;
          this.namingService.getTopic(this.articleType, this.topicId).subscribe(next => this.topic = next.name);
        } else if (data.tagPage) {
          this.total = data.tagPage.articlePage.totalElements;
          this.asyncMeals = of(data.tagPage.articlePage.items);
          this.tagId = data.tagPage.tagId;
          this.namingService.getTag(this.tagId).subscribe(next => this.tag = next.name);
        } else if(data.categoryPage) {
          this.total = data.categoryPage.totalElements;
          this.asyncMeals = of(data.categoryPage.items);
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  getImage(articleType: ArticleType, id) {
    return this.imageService.getImageByType(articleType, id);
  }

  getServicePageMethod(page: number) {
    if (this.tagId) {
      return this.tableService.getPageByTag(this.tagId, page, pageSize);
    }
    else if (this.topicId) {
      console.log("getPageByTopic");
      return this.tableService.getPageByTopic(this.articleType, this.topicId, page, pageSize);
    } else {
      return this.tableService.getPage(this.articleType, page, pageSize);
    }
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = this.getServicePageMethod(page - 1).pipe(
      tap(res => {
        this.total = res.totalElements;
        this.p = page;
        this.loading = false;
        console.log("getPage");
      }),
      map(res => res.items)
    );
  }

}
