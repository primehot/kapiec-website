import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimatedSearchComponent } from './animated-search/animated-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimatedSearchComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
