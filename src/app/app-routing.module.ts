import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NewsViewComponent} from './layout/view/news-view/news-view.component';
import {WomanViewComponent} from './layout/view/woman-view/woman-view.component';
import {MainViewComponent} from './layout/view/main-view/main-view.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {ArticleComponent} from './layout/view/article/article.component';
import {ArticleType} from './domain/emun/article.type';
import {TopicViewComponent} from "./layout/view/topic-view/topic-view.component";
import {TagViewComponent} from "./layout/view/tag-view/tag-view.component";

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'news', component: NewsViewComponent },
  { path: 'women', component: WomanViewComponent },

  { path: 'news/:id', component: ArticleComponent, data: { articleType: ArticleType.news }},
  { path: 'dream/:id', component: ArticleComponent, data: { articleType: ArticleType.dream }},
  { path: 'women/:id', component: ArticleComponent, data: { articleType: ArticleType.women }},

  { path: 'news/by-topics/:id', component: TopicViewComponent, data: { articleType: ArticleType.news }},
  { path: 'dream/by-topics/:id', component: TopicViewComponent, data: { articleType: ArticleType.dream }},
  { path: 'women/by-topics/:id', component: TopicViewComponent, data: { articleType: ArticleType.women }},

  { path: 'tags/:id', component: TagViewComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }
