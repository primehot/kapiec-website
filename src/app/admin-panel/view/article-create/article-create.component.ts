import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleType} from "../../../main-panel/domain/emun/article.type";
import {ArticleCategory} from "../../../main-panel/domain/dto/article/article.category";
import {ArticleDataService} from "../../service/article.data.service";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ArticleTag} from "../../../main-panel/domain/dto/article/article.tag";
import {ArticleTopic} from "../../../main-panel/domain/dto/article/article.topic";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ArticleDraft} from "../../domain/article.draft";
import {DialogComponent} from "../error-dialog/dialog.component";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit, OnDestroy {

  article: ArticleDraft;
  paragraphs;
  articleTypes;
  selectedFile: File;

  private componentDestroyed: Subject<any> = new Subject();
  private tags: ArticleTag[];

  private topics: ArticleTopic[];
  private newsTopic: ArticleTopic[];
  private womenTopic: ArticleTopic[];
  private url: String;

  constructor(private articleDataService: ArticleDataService, private dialog: MatDialog) {
    this.articleTypes = [ArticleType.news, ArticleType.women, ArticleType.dream, ArticleType.dreambook]
  }

  ngOnInit() {
    this.initArticle();

    this.articleDataService.getTags().pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.tags = next);
    this.articleDataService.getTopics(ArticleType.news).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.topics = this.newsTopic = next);
    this.articleDataService.getTopics(ArticleType.women).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.womenTopic = next);
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  initArticle() {
    this.article = new ArticleDraft();
    this.article.articleCategory = new ArticleCategory();
    this.article.articleCategory.name = ArticleType.news;
    this.article.hashTags = [];

    this.paragraphs = [];
  }

  addParagraph() {
    this.paragraphs.push({content: ""});
  }

  removeParagraph() {
    if (this.paragraphs.length > 1) {
      this.paragraphs.pop();
    }
  }

  articleTypeChange(event) {
    switch (event.value) {
      case ArticleType.news:
        this.topics = this.newsTopic;
        break;
      case ArticleType.women:
        this.topics = this.womenTopic;
        console.log(this.topics);
        break;
      default:
        this.topics = null;
    }
  }

  checkHashTag(event, hashTag) {
    if (event === true) {
      this.article.hashTags.push(hashTag);
    } else {
      let index = this.article.hashTags.indexOf(hashTag);
      if (index > -1) {
        this.article.hashTags.splice(index, 1);
      }
    }
  }

  topicChange(event) {
    this.article.topic = event.value.value;
    console.log(this.article);
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  onCreate() {
    if (this.validateArticle()) {
      this.articleDataService.postDraftArticle(this.article.articleCategory.name, this.article).pipe(takeUntil(this.componentDestroyed)).subscribe(() => this.showSuccess("Article Created"))
    }
  }

  validateArticle() {
    if (!this.article.title) {
      this.showError("Title can not be empty!");
      return false;
    }
    if (!this.article.hotContent) {
      this.showError("Article hotContent can not be empty!");
      return false;
    }
    if (!this.paragraphs[0] || !this.paragraphs[0].content) {
      this.showError("Article content can not be empty!");
      return false;
    }
    if (!this.article.hashTags || !this.article.hashTags[0]) {
      this.showError("Article hashTags must be set!");
      return false;
    }
    if (!this.article.topic) {
      this.showError("Article topic must be set!");
      return false;
    }
  }


  onCancel() {
    this.initArticle();
  }

  showError(description: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "250px";
    dialogConfig.data = {
      title: "Error",
      description: description,
    };


    this.dialog.open(DialogComponent, dialogConfig);
  }

  showSuccess(description: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "250px";
    dialogConfig.data = {
      title: "Success",
      description: description,
    };

    this.dialog.open(DialogComponent, dialogConfig);
  }

}


