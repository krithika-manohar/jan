import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniComponent } from './uni/uni.component';
import { HeaderComponent } from './header/header.component';
import { Test1Component } from './test1/test1.component';
import { ParentModule1Module } from './parent-module1/parent-module1.module';
import { KeyStatsComponent } from './key-stats/key-stats.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UniComponent,
    HeaderComponent,
    Test1Component,
    KeyStatsComponent,
    FooterComponent,
  ],
  // takes in other modules -- imports
  imports: [BrowserModule, ParentModule1Module],

  // provider - for services
  providers: [],

  // bootsrtap -- which is the starting component in module
  bootstrap: [
    AppComponent,
    UniComponent,
    HeaderComponent,
    KeyStatsComponent,
    FooterComponent,
  ],

  // exports - components; services; providers; modules
  exports: [BrowserModule],
})
export class AppModule {}
