import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AnimatedSearchComponent } from './animated-search/animated-search.component';
import { NewsViewComponent } from './news-view/news-view.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewsComponent } from './navbar/collapse/news/news.component';
import { HeaderComponent } from './navbar/header/header.component';
import { DreamComponent } from './navbar/collapse/dream/dream.component';
import { WomanComponent } from './navbar/collapse/woman/woman.component';
import { CollapseComponent } from './navbar/collapse/collapse.component';

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
    CollapseComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
