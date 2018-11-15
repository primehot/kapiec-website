import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article.type";
import {NavigationDataService} from "../../../../service/backend/navigation.data.service";
import {ImageService} from "../../../../service/backend/image.service";

@Component({
  selector: 'app-custom-article',
  templateUrl: './custom-article.component.html',
  styleUrls: ['./custom-article.component.css']
})
export class CustomArticleComponent implements OnInit {

  @Input() type: ArticleType;

  topics;
  articles;
  seeAlso;
  mostCommented;

  constructor(private imageService: ImageService,
              private navigationDataService: NavigationDataService) {
  }

  ngOnInit() {
    this.navigationDataService.getNavigationData(this.type).pipe().subscribe(navData => {
      this.topics = navData.topics;
      this.articles = navData.articles;
      this.seeAlso = navData.seeAlso;
      this.mostCommented = navData.mostCommented;
    });
  }

  getImage(id) {
    return this.imageService.getImageByType(this.type, id);
  }
}
