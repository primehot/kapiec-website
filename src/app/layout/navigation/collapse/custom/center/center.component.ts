import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../../../service/backend/image.service";
import {ArticleType} from "../../../../../domain/emun/article.type";
import {hideCollapse} from "../../../../../jquery";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  @Input() articles;
  @Input() type;
  @Input() dreamBookMainTitles;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  getImage(id) {
    return this.imageService.getImageByType(this.type, id);
  }

  isArticle() {
    return this.type !== ArticleType.dream;
  }

  hide() {
    hideCollapse(this.type);
  }

}
