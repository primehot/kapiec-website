import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './layout/navigation/navigation-bar/navbar.component';
import {NewsViewComponent} from './layout/view/news-view/news-view.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NewsComponent} from './layout/navigation/collapse/news/news.component';
import {HeaderComponent} from './layout/navigation/header/header.component';
import {DreamComponent} from './layout/navigation/collapse/dream/dream.component';
import {WomanComponent} from './layout/navigation/collapse/woman/woman.component';
import {HttpClientModule} from '@angular/common/http';
import {WomanViewComponent} from './layout/view/woman-view/woman-view.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {AppRoutingModule} from './app-routing.module';
import {MainViewComponent} from './layout/view/main-view/main-view.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {ArticleComponent} from './layout/view/article/article.component';
import {TableComponent} from './layout/view/table/table.component';
import { TopicViewComponent } from './layout/view/topic-view/topic-view.component';
import { CustomArticleComponent } from './layout/navigation/collapse/custom-article/custom-article.component';
import { TagViewComponent } from './layout/view/tag-view/tag-view.component';
import { TableNavigationComponent } from './layout/view/table-navigation/table-navigation.component';
import { TableAdditionalComponent } from './layout/view/table-additional/table-additional.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsViewComponent,
    NewsComponent,
    HeaderComponent,
    DreamComponent,
    WomanComponent,
    WomanViewComponent,
    MainViewComponent,
    PageNotFoundComponent,
    ArticleComponent,
    TableComponent,
    TopicViewComponent,
    CustomArticleComponent,
    TagViewComponent,
    TableNavigationComponent,
    TableAdditionalComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    LazyLoadImageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
