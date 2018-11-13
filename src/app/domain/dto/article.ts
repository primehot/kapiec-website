import {ArticleCategory} from "./article.category";

export class Article {
  id: number;
  title: string;
  topic: string;
  hotContent: string;
  content: string;
  articleCategory: ArticleCategory;
}
