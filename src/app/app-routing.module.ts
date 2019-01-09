import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainPanelComponent} from "./main-panel/main-panel.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {PageNotFoundComponent} from "./main-panel/layout/page-not-found/page-not-found.component";
import {SearchGuard} from "./main-panel/guard/search.guard";
import {ArticleType} from "./main-panel/domain/emun/article.type";
import {TableComponent} from "./main-panel/layout/view/table/table.component";
import {TagGuard} from "./main-panel/guard/tag.guard";
import {ArticleGuard} from "./main-panel/guard/article.guard";
import {ArticleComponent} from "./main-panel/layout/view/article/article.component";
import {DreamBookGuard} from "./main-panel/guard/dream.book.guard";
import {DreamBookViewComponent} from "./main-panel/layout/view/dream-book-view/dream-book-view.component";
import {TopicGuard} from "./main-panel/guard/topic.guard";
import {DreamBookSearchGuard} from "./main-panel/guard/dream.book.search.guard";
import {MainViewComponent} from "./main-panel/layout/view/main-view/main-view.component";
import {CategoryGuard} from "./main-panel/guard/category.guard";

const routes: Routes = [
  {path: 'admin', component: AdminPanelComponent},
  {path: '', component: MainPanelComponent, children: [
    {path: '', component: MainViewComponent, },
    {
      path: 'news', component: TableComponent, data: {articleType: ArticleType.news}, resolve: {categoryPage: CategoryGuard},
    },
    {
      path: 'news/:id', component: ArticleComponent, data: {articleType: ArticleType.news}, resolve: {article: ArticleGuard},
    },
    {
      path: 'news/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.news}, resolve: {topicPage: TopicGuard},
    },
    {
      path: 'women', component: TableComponent, data: {articleType: ArticleType.women}, resolve: {categoryPage: CategoryGuard},
    },
    {
      path: 'women/:id', component: ArticleComponent, data: {articleType: ArticleType.women}, resolve: {article: ArticleGuard},
    },
    {
      path: 'women/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.women}, resolve: {topicPage: TopicGuard},
    },
    {
      path: 'dream', component: DreamBookViewComponent,
    },
    {
      path: 'dream/:title', component: DreamBookViewComponent, resolve: {dreamBookTitlePage: DreamBookGuard},
    },
    {
      path: 'dream/search/:phrase', component: DreamBookViewComponent, resolve: {dreamBookTitlePage: DreamBookSearchGuard},
    },
    {
      path: 'dream/:id', component: ArticleComponent, data: {articleType: ArticleType.dream}, resolve: {article: ArticleGuard},
    },
    {
      path: 'dream/by-topics/:topicId', component: TableComponent, data: {articleType: ArticleType.dream}, resolve: {topicPage: TopicGuard},
    },
    {
      path: 'dreambook/:id', component: ArticleComponent, data: {articleType: ArticleType.dreambook}, resolve: {article: ArticleGuard},
    },
    {
      path: 'tags/:tagId', component: TableComponent, data: {articleType: ArticleType.tags}, resolve: {tagPage: TagGuard},
    },
    // {path: 'tags', redirectTo: '', },
    {
      path: 'search/:phrase', component: TableComponent, data: {articleType: ArticleType.search}, resolve: {searchPage: SearchGuard},
    },
    // {path: 'search', redirectTo: '', },

    {path: '**', component: PageNotFoundComponent, }
  ]}
];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
