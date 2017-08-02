import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { ChartModule } from 'angular-Highcharts';
//import { Chart } from 'angular-Highcharts';
//import * as highcharts from 'Highcharts';

import { StockApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { MystocksPage } from '../pages/mystocks/mystocks';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StockServiceProvider } from '../providers/stock-service/stock-service';
import { NewsServiceProvider } from '../providers/news-service/news-service';

@NgModule({
  declarations: [
    StockApp,
    HomePage,
    ListPage,
    DetailPage,
    MystocksPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(StockApp),
    HttpModule,
    //InAppBrowser
    //ChartModule//.forRoot(require('highcharts'))
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StockApp,
    HomePage,
    ListPage,
    DetailPage,
    MystocksPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StockServiceProvider,
    NewsServiceProvider,
    InAppBrowser
  ]
})



export class AppModule {}
