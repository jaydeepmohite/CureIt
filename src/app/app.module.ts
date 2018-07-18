import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {WelcomePageModule} from "../pages/welcome/welcome.module";
import {LoginPageModule} from "../pages/login/login.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {TimelinePageModule} from "../pages/timeline/timeline.module";
import {ExpertPageModule} from "../pages/expert/expert.module";
import {FundraiserPageModule} from "../pages/fundraiser/fundraiser.module";
import {HttpClientModule} from "@angular/common/http";
import {EmojiProvider} from "../providers/emoji";
import {ChatModule} from "../pages/chat/chat.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    WelcomePageModule,
    LoginPageModule,
    TabsPageModule,
    ProfilePageModule,
    TimelinePageModule,
    ExpertPageModule,
    FundraiserPageModule,
    ChatModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider
  ]
})
export class AppModule {}
