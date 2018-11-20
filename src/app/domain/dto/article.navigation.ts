import {ArticleType} from "../emun/article.type";
import {Article} from "./article/article";
import {ArticleShort} from "./article/article.short";

export class ArticleNavigation {
  topics: ArticleType[];
  articles: Article[];
  seeAlso: ArticleShort[];
  mostCommented: ArticleShort[];
}
