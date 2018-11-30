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

const routes: Routes = [
  {path: '', component: MainViewComponent},
  {
    path: 'news', component: TableComponent, data: {articleType: ArticleType.news}, resolve: {
    categoryPage: CategoryGuard
  }
  },
  {
    path: 'women', component: TableComponent, data: {articleType: ArticleType.women}, resolve: {
    categoryPage: CategoryGuard
  }
  },
  {
    path: 'dream/:title', component: DreamBookViewComponent, data: {articleType: ArticleType.women}, resolve: {
    dreamBookTitlePage: DreamBookGuard
  }
  },

  {
    path: 'news/:id', component: ArticleComponent, data: {articleType: ArticleType.news},
    resolve: {
      article: ArticleGuard
    }
  },
  {
    path: 'dream/:id', component: ArticleComponent, data: {articleType: ArticleType.dream},
    resolve: {
      article: ArticleGuard
    }
  },
  {
    path: 'women/:id', component: ArticleComponent, data: {articleType: ArticleType.women},
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
    path: 'dream/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.dream},
    resolve: {
      topicPage: TopicGuard
    }
  },
  {
    path: 'women/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.women},
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
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})

export class AppRoutingModule {
}
