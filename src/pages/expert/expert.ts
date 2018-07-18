import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExpertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expert',
  templateUrl: 'expert.html',
})
export class ExpertPage {

  toUser : {toUserId: string, toUserName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Dr. Henry Gray'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpertPage');
  }

}
