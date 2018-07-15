import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePage } from "../pages/welcome/welcome";
import { LoginPage } from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { ProfilePage } from "../pages/profile/profile";
import { TimelinePage } from "../pages/timeline/timeline";
import { ExpertPage } from "../pages/expert/expert";
import { FundraiserPage } from "../pages/fundraiser/fundraiser";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    TabsPage,
    ProfilePage,
    TimelinePage,
    ExpertPage,
    FundraiserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    TabsPage,
    ProfilePage,
    TimelinePage,
    ExpertPage,
    FundraiserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
