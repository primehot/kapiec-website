import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AnimatedSearchComponent } from './animated-search/animated-search.component';
import { NewsViewComponent } from './view/news-view/news-view.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewsComponent } from './navbar/collapse/news/news.component';
import { HeaderComponent } from './navbar/header/header.component';
import { DreamComponent } from './navbar/collapse/dream/dream.component';
import { WomanComponent } from './navbar/collapse/woman/woman.component';
import { CollapseComponent } from './navbar/collapse/collapse.component';
import { HttpClientModule } from '@angular/common/http';
import { WomanViewComponent } from './view/woman-view/woman-view.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { MainViewComponent } from './view/main-view/main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimatedSearchComponent,
    NewsViewComponent,
    NewsComponent,
    HeaderComponent,
    DreamComponent,
    WomanComponent,
    CollapseComponent,
    WomanViewComponent,
    MainViewComponent,
    PageNotFoundComponent
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
export class AppModule { }
