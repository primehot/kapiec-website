import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './main-panel/layout/navigation/navigation-bar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HeaderComponent} from './main-panel/layout/navigation/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {MainViewComponent} from './main-panel/layout/view/main-view/main-view.component';
import {PageNotFoundComponent} from './main-panel/layout/page-not-found/page-not-found.component';
import {ArticleComponent} from './main-panel/layout/view/article/article.component';
import {TableComponent} from './main-panel/layout/view/table/table.component';
import {CustomMenuComponent} from './main-panel/layout/navigation/collapse/navigation.collapse.component';
import {TableNavigationComponent} from './main-panel/layout/view/table-navigation/table-navigation.component';
import {TableAdditionalComponent} from './main-panel/layout/view/table-additional/table-additional.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule, MatRippleModule, MatTooltipModule
} from '@angular/material';
import { CenterComponent } from './main-panel/layout/navigation/collapse/custom/center/center.component';
import { RightComponent } from './main-panel/layout/navigation/collapse/custom/right/right.component';
import { LeftComponent } from './main-panel/layout/navigation/collapse/custom/left/left.component';
import { DreamBookViewComponent } from './main-panel/layout/view/dream-book-view/dream-book-view.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './main-panel/layout/footer/footer.component';
import {NgxPopperModule} from "ngx-popper";
import { DreamBookAdditionalComponent } from './main-panel/layout/view/dream-book-additional/dream-book-additional.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainViewComponent,
    PageNotFoundComponent,
    ArticleComponent,
    TableComponent,
    CustomMenuComponent,
    TableNavigationComponent,
    TableAdditionalComponent,
    CenterComponent,
    RightComponent,
    LeftComponent,
    DreamBookViewComponent,
    FooterComponent,
    DreamBookAdditionalComponent,
    MainPanelComponent,
    AdminPanelComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    LazyLoadImageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    MatTooltipModule,
    NgxPopperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
