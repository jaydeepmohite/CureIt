import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides : Slides;
  slidePages = [
    {
      title: "Welcome to the CureIt!",
      description: "Made in <b>Deutsche Bank</b> with Love !",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "What is CureIt?",
      description: "<b>CureIt</b> is an Deutsche Bank Initiative to support <b>Cure Leukaemia</b> !",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "What is Cure Leukaemia?",
      description: "<b>Cure Leukaemia</b> is one of the leading centres in the world for the development of new drug and transplant treatments for patients with blood cancers.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  skipToLast(){
    while(!this.slides.isEnd()) {
      this.slides.slideNext();
    }
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage).catch();
  }

}
