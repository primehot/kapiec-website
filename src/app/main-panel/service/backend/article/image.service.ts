import {Injectable} from '@angular/core';
import {ArticleType} from "../../../domain/emun/article.type";
import {getUrl} from "../../../../url.config";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getImage(url, id): string {
    return `${url}/${id}/image`;
  }

  getImageByType(articleType: ArticleType, id) {
    return this.getImage(getUrl(articleType), id);
  }

}
