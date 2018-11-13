import {ArticleCategory} from "./article.category";
import {ArticleHashTag} from "./article.hash.tag";

export class Article {
  id: number;
  title: string;
  topic: string;
  hotContent: string;
  content: string;
  articleCategory: ArticleCategory;
  hashTags: ArticleHashTag[];
}
