export enum ArticleType {
  news = 'news',
  women = 'women',
  dream = 'dream'
}

function getNavigationNameByType(articleType: ArticleType) {
  switch (articleType) {
    case ArticleType.dream:
      return "Сонник";
    case ArticleType.news:
      return "Новости";
    case ArticleType.women:
      return "Для женщин";
  }
}

export {getNavigationNameByType};

