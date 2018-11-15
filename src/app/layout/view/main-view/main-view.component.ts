import {Component, OnInit} from '@angular/core';
import {MainArticleService} from "../../../service/backend/main.article.service";
import {ArticleShort} from "../../../domain/dto/article.short";
import {ImageService} from "../../../service/backend/image.service";
import {urlConfig} from "../../../service/util/url.config";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css', '../bootstrap.view.scss']
})
export class MainViewComponent implements OnInit {
  mainArticle: ArticleShort;
  mainItems: ArticleShort[];
  recommendedNews: ArticleShort[];
  recommendedWomen: ArticleShort[];

  constructor(private service: MainArticleService,
              private imageService: ImageService) {
    this.service.getMainArticles().subscribe(next => {
      console.log(next);
      this.mainArticle = next.mainArticle;
      this.mainItems = next.mainItems;
      this.recommendedNews = next.recommendedNews;
      this.recommendedWomen = next.recommendedWomen;
    })
  }

  getImage(id) {
    return this.imageService.getImage(urlConfig.newsUrl, id);
  }

  ngOnInit() {
  }
}
