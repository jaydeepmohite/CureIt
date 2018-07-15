import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
import { TimelinePage } from "../timeline/timeline";
import { ExpertPage } from "../expert/expert";
import { FundraiserPage } from "../fundraiser/fundraiser";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = ProfilePage;
  tab2Root = TimelinePage;
  tab3Root = ExpertPage;
  tab4Root = FundraiserPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
