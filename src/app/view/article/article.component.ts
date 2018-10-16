import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../service/backend.service';
import {Article} from '../../dto/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private backendService: BackendService) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const articleType = +this.route.snapshot.data.articleType;
    const id = +this.route.snapshot.paramMap.get('id');
    this.backendService.getArticle(articleType, id).subscribe(article => this.article = article);
  }

}
