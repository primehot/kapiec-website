import {ArticleCategory} from "./article.category";
import {ArticleHashTag} from "./article.hash.tag";
import {ArticleShort} from "./article.short";

export class Article {
  id: number;
  title: string;
  topic: string;
  hotContent: string;
  content: string;
  articleCategory: ArticleCategory;
  hashTags: ArticleHashTag[];
  previous: ArticleShort;
  next: ArticleShort;
}
