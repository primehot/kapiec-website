import {ArticleType} from "../emun/article.type";
import {Article} from "./article/article";
import {ArticleShort} from "./article/article.short";
import {ShortDreamBook} from "./dream_book/dream.book";

export class ArticleNavigation {
  topics: ArticleType[];
  articles: Article[];
  seeAlso: ArticleShort[];
  mostCommented: ArticleShort[];
}

export class DreamBookNavigation {
  mainTitles: string[];
  seeAlso: ShortDreamBook[];
}
