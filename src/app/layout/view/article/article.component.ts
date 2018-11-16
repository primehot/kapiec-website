import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from "../../../domain/dto/article";
import {ArticleService} from "../../../service/backend/article.service";
import {ImageService} from "../../../service/backend/image.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {

  article: Article;
  imageSrc: string;

  constructor(private route: ActivatedRoute,
              private imageService: ImageService,
              private articleService: ArticleService) {
  }

  ngOnInit() {
    const articleType = this.route.snapshot.data.articleType;
    const id = this.route.snapshot.paramMap.get('id');

    this.getArticle(articleType, id);
  }

  getArticle(articleType, id): void {

    this.articleService.getArticle(articleType, id).pipe().subscribe(article => {
      this.article = article;
    });

    this.imageSrc = this.imageService.getImageByType(articleType, id);
  }

}
