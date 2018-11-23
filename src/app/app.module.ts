import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './layout/navigation/navigation-bar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HeaderComponent} from './layout/navigation/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {AppRoutingModule} from './app-routing.module';
import {MainViewComponent} from './layout/view/main-view/main-view.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {ArticleComponent} from './layout/view/article/article.component';
import {TableComponent} from './layout/view/table/table.component';
import {TopicViewComponent} from './layout/view/topic-view/topic-view.component';
import {CustomMenuComponent} from './layout/navigation/collapse/navigation.collapse.component';
import {TagViewComponent} from './layout/view/tag-view/tag-view.component';
import {TableNavigationComponent} from './layout/view/table-navigation/table-navigation.component';
import {TableAdditionalComponent} from './layout/view/table-additional/table-additional.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule, MatRippleModule
} from '@angular/material';
import { CenterComponent } from './layout/navigation/collapse/custom/center/center.component';
import { RightComponent } from './layout/navigation/collapse/custom/right/right.component';
import { LeftComponent } from './layout/navigation/collapse/custom/left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainViewComponent,
    PageNotFoundComponent,
    ArticleComponent,
    TableComponent,
    TopicViewComponent,
    CustomMenuComponent,
    TagViewComponent,
    TableNavigationComponent,
    TableAdditionalComponent,
    CenterComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    LazyLoadImageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
