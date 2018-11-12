import {ArticleType} from "../../domain/emun/article-type";

function getNavigationName(articleType: ArticleType) {
  switch (articleType) {
    case ArticleType.dream:
      return "Сонник";
    case ArticleType.news:
      return "Новости";
    case ArticleType.women:
      return "Для женщин";
  }
}

export {getNavigationName};
