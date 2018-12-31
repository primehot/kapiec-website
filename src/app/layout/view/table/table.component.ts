import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ArticleType} from '../../../domain/emun/article.type';
import {ImageService} from "../../../service/backend/article/image.service";
import {TableService} from "../../../service/backend/article/table.service";
import {Article} from "../../../domain/dto/article/article";
import {ActivatedRoute} from "@angular/router";
import {NamingService} from "../../../service/backend/article/naming.service";
import {pageSize} from "../../../service/util/page.config";
import {IdentificationPageDecorator} from "../../../domain/decorator/identification.page.decorator";
import {ArticlePage} from "../../../domain/dto/article/article.page";
import {takeUntil} from "rxjs/internal/operators";
import {addFullViewPort, scrollTop} from "../../../jquery";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../bootstrap.view.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  articleType: ArticleType;
  topicId: string;
  topic: string;
  tagId: string;
  tag: string;
  phrase: string;

  asyncMeals: Observable<Article[]>;
  p = 1;
  pageSize = pageSize;
  total: number;
  loading: boolean;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private imageService: ImageService,
              private tableService: TableService,
              private namingService: NamingService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    addFullViewPort('table-view', -10);
    this.route.data
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((data: {
        articleType: ArticleType,
        topicPage: IdentificationPageDecorator,
        tagPage: IdentificationPageDecorator,
        categoryPage: ArticlePage,
        searchPage: IdentificationPageDecorator
      }) => {
        this.articleType = data.articleType;
        if (data.topicPage) {
          this.topicPageData(data.topicPage);
        } else if (data.tagPage) {
          this.tagPageData(data.tagPage);
        } else if (data.categoryPage) {
          this.categoryPageData(data.categoryPage)
        } else if (data.searchPage) {
          this.searchPageData(data.searchPage);
        }
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  categoryPageData(categoryPage) {
    this.total = categoryPage.totalElements;
    this.asyncMeals = of(categoryPage.items);
  }

  topicPageData(topicPage) {
    this.total = topicPage.articlePage.totalElements;
    this.asyncMeals = of(topicPage.articlePage.items);
    this.topicId = topicPage.id;
    this.namingService.getTopic(this.articleType, this.topicId).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.topic = next.name);
  }

  searchPageData(searchPage) {
    this.total = searchPage.articlePage.totalElements;
    this.asyncMeals = of(searchPage.articlePage.items);
    this.phrase = searchPage.id;
  }

  tagPageData(tagPage) {
    this.total = tagPage.articlePage.totalElements;
    this.asyncMeals = of(tagPage.articlePage.items);
    this.tagId = tagPage.id;
    this.namingService.getTag(this.tagId).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.tag = next.name);
  }

  getImage(articleType: ArticleType, id) {
    return this.imageService.getImageByType(articleType, id);
  }

  getServicePageMethod(page: number) {
    if (this.tagId) {
      return this.tableService.getPageByTag(this.tagId, page, pageSize);
    } else if (this.topicId) {
      return this.tableService.getPageByTopic(this.articleType, this.topicId, page, pageSize);
    } else if (this.phrase) {
      return this.tableService.getPageByPhrase(this.phrase, page, this.pageSize);
    } else {
      return this.tableService.getPage(this.articleType, page, pageSize);
    }
  }

  /**
   * We start from page 1 instead of 0. Because page 0 is reserved for recommended and newest data
   * @param {number} page
   */
  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = this.getServicePageMethod(page).pipe(
      tap(res => {
        console.log(res);
        this.total = res.totalElements;
        this.p = page;
        this.loading = false;
        scrollTop(300);
      }),
      map(res => res.items),
      takeUntil(this.componentDestroyed)
    );
  }

}
