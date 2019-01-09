import {ArticleCategory} from "./article.category";
import {ArticleHashTag} from "./article.hash.tag";

export class ArticleShort {
  id: number;
  title: string;
  shortContent: string;
  articleCategory: ArticleCategory;
  hashTags: ArticleHashTag[];
}
