import {ArticleTopic} from "../../main-panel/domain/dto/article/article.topic";
import {ArticleCategory} from "../../main-panel/domain/dto/article/article.category";
import {ArticleHashTag} from "../../main-panel/domain/dto/article/article.hash.tag";

export class ArticleDraft {
  id: number;
  title: string;
  topic: ArticleTopic;
  hotContent: string;
  content: string;
  articleCategory: ArticleCategory;
  hashTags: ArticleHashTag[];
}
