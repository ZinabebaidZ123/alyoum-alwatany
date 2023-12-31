import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';
import { NavbarPagesModule } from './navbar-pages/navbar-pages.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    LandingModule ,
    SharedModule ,
    NavbarPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
