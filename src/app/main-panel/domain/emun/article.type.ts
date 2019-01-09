export enum ArticleType {
  news = 'news',
  women = 'women',
  dream = 'dream',
  dreambook = 'dreambook',
  tags = 'tags',
  search = 'search'
}

function getNavigationNameByType(articleType: ArticleType) {
  switch (articleType) {
    case ArticleType.dream:
    case ArticleType.dreambook:
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

