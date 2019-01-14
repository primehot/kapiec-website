import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ArticleType} from "../../../main-panel/domain/emun/article.type";
import {ArticleCategory} from "../../../main-panel/domain/dto/article/article.category";
import {ArticleDataService} from "../../service/article.data.service";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {ArticleTag} from "../../../main-panel/domain/dto/article/article.tag";
import {ArticleTopic} from "../../../main-panel/domain/dto/article/article.topic";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ArticleDraft, ParagraphType} from "../../domain/article.draft";
import {DialogComponent} from "../error-dialog/dialog.component";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit, OnDestroy {

  @Input()
  article?: ArticleDraft;
  mainImage: File;
  paragraphData = new Map();
  articleTypes;

  private tags: ArticleTag[];
  private topics: ArticleTopic[];
  private newsTopic: ArticleTopic[];
  private womenTopic: ArticleTopic[];
  private url: String;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private articleDataService: ArticleDataService, private dialog: MatDialog) {
    this.articleTypes = [ArticleType.news, ArticleType.women, ArticleType.dream, ArticleType.dreambook];
    this.articleDataService.getTags().pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.tags = next);
    this.articleDataService.getTopics(ArticleType.news).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.topics = this.newsTopic = next);
    this.articleDataService.getTopics(ArticleType.women).pipe(takeUntil(this.componentDestroyed)).subscribe(next => this.womenTopic = next);
  }

  ngOnInit() {
    if (!this.article) {
      this.initArticle();
    }
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

    this.article.content = [];
  }

  addNoIMGParagraph() {
    this.article.content.push({id: this.article.content.length, typeId: ParagraphType.NO_IMAGE, content: ""});
  }

  addLeftIMGParagraph() {
    this.article.content.push({id: this.article.content.length, typeId: ParagraphType.LEFT_IMAGE, content: ""});
  }

  addTopIMGParagraph() {
    this.article.content.push({id: this.article.content.length, typeId: ParagraphType.TOP_IMAGE, content: ""});
  }

  addRightIMGParagraph() {
    this.article.content.push({id: this.article.content.length, typeId: ParagraphType.RIGHT_IMAGE, content: ""});
  }

  addBottomIMGParagraph() {
    this.article.content.push({id: this.article.content.length, typeId: ParagraphType.BOTTOM_IMAGE, content: ""});
  }

  removeParagraph() {
    if (this.article.content.length > 1) {
      let removed = this.article.content.pop();
      this.paragraphData.delete(removed.id);
    }
  }

  articleTypeChange(event) {
    switch (event.value) {
      case ArticleType.news:
        this.topics = this.newsTopic;
        break;
      case ArticleType.women:
        this.topics = this.womenTopic;
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
    console.log(event);
    this.article.topic = event.value;
  }

  onMainFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      this.mainImage = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  onFileChanged(event, i) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.paragraphData.set(i, {image: file, imageUri: event.target.result})
      }
      console.log(this.paragraphData);
      console.log(this.paragraphData.get(0));
    }
  }

  onCreate() {
    if (this.validateArticle()) {
      console.log(this.article);
      this.articleDataService.postDraftArticle(ArticleType[this.article.articleCategory.name], this.article, this.mainImage).pipe(takeUntil(this.componentDestroyed)).subscribe(() => this.showSuccess("Article Created"))
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
    if (!this.article.content[0] || !this.article.content[0].content) {
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
    if (!this.mainImage) {
      this.showError("Article main image must be added!");
      return false;
    }
    return true;
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


