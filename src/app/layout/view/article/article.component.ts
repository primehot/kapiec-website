import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from "../../../service/backend/article/image.service";
import {Article} from "../../../domain/dto/article/article";
import {takeUntil} from "rxjs/internal/operators";
import {Subject} from "rxjs/index";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit, OnDestroy {

  article: Article;
  imageSrc: string;

  private componentDestroyed: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute,
              private imageService: ImageService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((data: { article: Article }) => {
        this.article = data.article;
        this.imageSrc = this.imageService.getImageByType(this.article.articleCategory.name, this.article.id)
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }
}
