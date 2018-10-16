import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NewsViewComponent} from './view/news-view/news-view.component';
import {WomanViewComponent} from './view/woman-view/woman-view.component';
import {MainViewComponent} from './view/main-view/main-view.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ArticleComponent} from './view/article/article.component';
import {ArticleType} from './emun/article-type';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'news', component: NewsViewComponent },
  { path: 'woman', component: WomanViewComponent },
  { path: 'news/:id', component: ArticleComponent, data: { articleType: ArticleType.news }},
  { path: 'woman/:id', component: ArticleComponent, data: { articleType: ArticleType.woman }},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }
