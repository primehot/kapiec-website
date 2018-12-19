import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainViewComponent} from './layout/view/main-view/main-view.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {ArticleComponent} from './layout/view/article/article.component';
import {ArticleType} from './domain/emun/article.type';
import {ArticleGuard} from "./guard/article.guard";
import {TableComponent} from "./layout/view/table/table.component";
import {TopicGuard} from "./guard/topic.guard";
import {TagGuard} from "./guard/tag.guard";
import {CategoryGuard} from "./guard/category.guard";
import {DreamBookViewComponent} from "./layout/view/dream-book-view/dream-book-view.component";
import {DreamBookGuard} from "./guard/dream.book.guard";
import {SearchGuard} from "./guard/search.guard";
import {DreamBookSearchGuard} from "./guard/dream.book.search.guard";

const routes: Routes = [
  {path: '', component: MainViewComponent},
  {
    path: 'news', component: TableComponent, data: {articleType: ArticleType.news}, resolve: {
    categoryPage: CategoryGuard
  }
  },
  {
    path: 'news/:id', component: ArticleComponent, data: {articleType: ArticleType.news},
    resolve: {
      article: ArticleGuard
    }
  },
  {
    path: 'news/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.news},
    resolve: {
      topicPage: TopicGuard
    }
  },
  {
    path: 'women', component: TableComponent, data: {articleType: ArticleType.women}, resolve: {
    categoryPage: CategoryGuard
  }
  },
  {
    path: 'women/:id', component: ArticleComponent, data: {articleType: ArticleType.women},
    resolve: {
      article: ArticleGuard
    }
  },
  {
    path: 'women/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.women},
    resolve: {
      topicPage: TopicGuard
    }
  },
  {
    path: 'dream', component: DreamBookViewComponent
  },
  {
    path: 'dream/:title', component: DreamBookViewComponent, resolve: {
    dreamBookTitlePage: DreamBookGuard
  }
  },
  {
    path: 'dream/search/:phrase', component: DreamBookViewComponent, resolve: {
    dreamBookTitlePage: DreamBookSearchGuard
  }
  },

  {
    path: 'dream/:id', component: ArticleComponent, data: {articleType: ArticleType.dream},
    resolve: {
      article: ArticleGuard
    }
  },
  {
    path: 'dream/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.dream},
    resolve: {
      topicPage: TopicGuard
    }
  },
  {
    path: 'tags/:tagId', component: TableComponent, data: {articleType: ArticleType.tags},
    resolve: {
      tagPage: TagGuard
    }
  },
  {path: 'tags', redirectTo: ''},

  {
    path: 'search/:phrase', component: TableComponent, data: {articleType: ArticleType.search},
    resolve: {
      searchPage: SearchGuard
    }
  },
  {path: 'search', redirectTo: ''},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})

export class AppRoutingModule {
}
