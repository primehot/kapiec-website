import {ArticleType} from "./main-panel/domain/emun/article.type";

const serverHost = 'http://localhost';
const serverPort = '8080';
const serverUrl = `${serverHost}:${serverPort}`;

const urlConfig = {
  mainUrl: `${serverUrl}/main`,
  newsUrl: `${serverUrl}/news`,
  dreamUrl: `${serverUrl}/dream`,
  dreamBookUrl: `${serverUrl}/dreambook`,
  womenUrl: `${serverUrl}/women`,
  tagsUrl: `${serverUrl}/tags`,
  searchUrl: `${serverUrl}/search`,
};

const getUrl = (articleType) => {
  switch (articleType) {
    case ArticleType.women:
      return urlConfig.womenUrl;
    case ArticleType.news:
      return urlConfig.newsUrl;
    case ArticleType.dream:
      return urlConfig.dreamUrl;
    case ArticleType.dreambook:
      return urlConfig.dreamBookUrl;
    case ArticleType.tags:
      return urlConfig.tagsUrl;
    case ArticleType.search:
      return urlConfig.searchUrl;
  }
};

const getAdministrationUrl = () => {
  return `${serverUrl}/administration`;
};

const getAuthUrl = () => {
  return `${serverUrl}/auth`;
};



export {urlConfig, getUrl, getAdministrationUrl, getAuthUrl};
