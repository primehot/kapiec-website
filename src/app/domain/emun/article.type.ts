export enum ArticleType {
  news = 'news',
  women = 'women',
  dream = 'dream',
  tags = 'tags',
  search = 'search'
}

function getNavigationNameByType(articleType: ArticleType) {
  switch (articleType) {
    case ArticleType.dream:
      return "Сонник";
    case ArticleType.news:
      return "Новости";
    case ArticleType.women:
      return "Для женщин";
    case ArticleType.tags:
      return "Таги";
    case ArticleType.search:
      return "Поиск";
  }
}

export {getNavigationNameByType};

