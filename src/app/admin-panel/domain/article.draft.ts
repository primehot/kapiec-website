import {ArticleTopic} from "../../main-panel/domain/dto/article/article.topic";
import {ArticleCategory} from "../../main-panel/domain/dto/article/article.category";
import {ArticleHashTag} from "../../main-panel/domain/dto/article/article.hash.tag";

export class ArticleDraft {
  id: number;
  title: string;
  topic: ArticleTopic;
  hotContent: string;
  content: ParagraphDraft[];
  articleCategory: ArticleCategory;
  hashTags: ArticleHashTag[];
}

export enum ParagraphType {
  NO_IMAGE = 0, LEFT_IMAGE = 1, TOP_IMAGE = 2, RIGHT_IMAGE = 3, BOTTOM_IMAGE = 4
}

export class ParagraphDraft {
  id: number;
  content: string;
  typeId: number;
}
