import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from "../../../service/backend/image.service";
import {Article} from "../../../domain/dto/article/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {

  article: Article;
  imageSrc: string;

  constructor(private route: ActivatedRoute,
              private imageService: ImageService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { article: Article }) => {
        this.article = data.article;
        this.imageSrc = this.imageService.getImageByType(this.article.articleCategory.name, this.article.id)
      });
  }
}
