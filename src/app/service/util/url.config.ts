import {ArticleType} from "../../domain/emun/article.type";

const serverHost = 'http://localhost';
const serverPort = '8080';
const serverUrl = `${serverHost}:${serverPort}`;

const urlConfig = {
  mainUrl: `${serverUrl}/main`,
  newsUrl: `${serverUrl}/news`,
  dreamUrl: `${serverUrl}/dream`,
  womenUrl: `${serverUrl}/women`,
  tagsUrl: `${serverUrl}/tags`,
};

const getUrl = (articleType) => {
  switch (articleType) {
    case ArticleType.women:
      return urlConfig.womenUrl;
    case ArticleType.news:
      return urlConfig.newsUrl;
    case ArticleType.dream:
      return urlConfig.dreamUrl;
    case ArticleType.tags:
      return urlConfig.tagsUrl;
  }
};

export {urlConfig, getUrl};
