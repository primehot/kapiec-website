import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {NavigationDataService} from "../../../service/backend/navigation.data.service";

@Component({
  selector: 'app-navigation-collapse',
  templateUrl: './navigation.collapse.component.html',
  styleUrls: ['./navigation.collapse.component.css']
})
export class CustomMenuComponent implements OnInit {

  @Input() type: ArticleType;

  articleTopics;
  articles;
  articleSeeAlso;
  articleMostCommented;

  dreamBookMainTitles;
  dreamBookSeeAlso;

  constructor(private navigationDataService: NavigationDataService) {
  }

  ngOnInit() {
    if(this.type === ArticleType.dream) {
      this.navigationDataService.getDreamBookNavigationData().pipe().subscribe(navData => {
        this.dreamBookMainTitles = navData.mainTitles;
        this.dreamBookSeeAlso = navData.seeAlso;
      });
    } else {
      this.navigationDataService.getArticleNavigationData(this.type).pipe().subscribe(navData => {
        this.articleTopics = navData.topics;
        this.articles = navData.articles;
        this.articleSeeAlso = navData.seeAlso;
        this.articleMostCommented = navData.mostCommented;
      });
    }
  }

}
