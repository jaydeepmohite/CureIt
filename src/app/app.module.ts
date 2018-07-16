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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
