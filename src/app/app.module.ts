import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniComponent } from './uni/uni.component';
import { HeaderComponent } from './header/header.component';
import { Test1Component } from './test1/test1.component';
import { ParentModule1Module } from './parent-module1/parent-module1.module';
import { KeyStatsComponent } from './key-stats/key-stats.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
// const appRoute: Routes = [
//   {
//     path: 'Upcoming',
//     component: UpcomingComponent,
//   },
//   { path: 'Different course', component: UniComponent },
//   { path: 'Key stats', component: KeyStatsComponent },
//   { path: 'footer', component: FooterComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    UniComponent,
    HeaderComponent,
    Test1Component,
    KeyStatsComponent,
    FooterComponent,
    UpcomingComponent,
    HomeComponent,
    ErrorComponent,
  ],
  // takes in other modules -- imports
  imports: [BrowserModule, ParentModule1Module, RouterModule, AppRoutingModule],

  // provider - for services
  providers: [],

  // bootsrtap -- which is the starting component in module
  bootstrap: [
    AppComponent,
    UniComponent,
    HeaderComponent,
    KeyStatsComponent,
    FooterComponent,
    UpcomingComponent,
    HomeComponent,
    ErrorComponent,
  ],

  // exports - components; services; providers; modules
  exports: [BrowserModule, RouterModule],
})
export class AppModule {}
