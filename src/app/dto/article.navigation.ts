import {ArticleType} from "../emun/article-type";
import {Article} from "./article";
import {ArticleShort} from "./article.short";

export class ArticleNavigation {
  topics: ArticleType[];
  articles: Article[];
  seeAlso: ArticleShort[];
}
