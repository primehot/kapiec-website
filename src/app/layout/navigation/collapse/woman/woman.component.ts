import {Component, OnInit} from '@angular/core';
import {ArticleType} from "../../../../domain/emun/article.type";

@Component({
  selector: 'app-navbar-collapse-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {

  type = ArticleType.women;

  ngOnInit() {
  }

}
