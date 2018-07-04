import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Favorites } from '../pages/favorites/favorites';
import { Library } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import {Quotes} from '../pages/quotes/quotes';
import {Settings} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tab';
import {QuotesService} from '../service/quote';
import {SettingService} from '../service/setting';
import { Push } from '@ionic-native/push';
import { Detailpage } from "../pages/detailpage/detailpage";
import { AdMobFree } from "@ionic-native/admob-free";



@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    QuotePage,
    Quotes,
    Settings,
    TabsPage,
    Detailpage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    QuotePage,
    Quotes,
    Settings,
    TabsPage,
    Detailpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},QuotesService,SettingService,Push
  ]
})
export class AppModule {}
