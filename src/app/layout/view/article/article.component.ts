import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, ParamMap} from '@angular/router';
import {ArticleService} from "../../../service/backend/article.service";
import {ImageService} from "../../../service/backend/image.service";
import {Article} from "../../../domain/dto/article/article";
import {switchMap} from 'rxjs/operators';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;
  imageSrc: string;

  constructor(private route: ActivatedRoute,
              private imageService: ImageService,
              private articleService: ArticleService) {
  }

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.articleService.getArticle(this.route.snapshot.data.articleType, params.get('id')))
    );

    this.article$.subscribe(next => this.imageSrc = this.imageService.getImageByType(next.articleCategory.name, next.id));
  }
}
