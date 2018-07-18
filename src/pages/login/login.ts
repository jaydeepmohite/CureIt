import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from "ionic-angular";
import { regexValidators } from '../validators/validator';
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public toastController: ToastController, public loadingController: LoadingController) {
    this.credentialsForm = this.formBuilder.group({
      email: [
        '', Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ]
    });
  }

  onLogin(){
    this.presentToast("Login Success");
    this.navCtrl.setRoot(TabsPage).catch();
  }

  onForgotPassword(){
    this.presentToast("Forgot Password Clicked")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onFacebookLogin(){

    let loading = this.loadingController.create({
      content: 'Please wait...'
    });

    loading.present();

    loading.onDidDismiss(() => {
      this.presentToast("Facebook Login Success");
      this.navCtrl.setRoot(TabsPage).catch();
    })

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  onGooglePlusLogin(){
    this.presentToast("Google+ Login Success");
    this.navCtrl.setRoot(TabsPage).catch();
  }

  onTwitterLogin(){
    this.presentToast("Twitter Login Success");
    this.navCtrl.setRoot(TabsPage).catch();
  }

  onInstagramLogin(){
    this.presentToast("Instagram Login Success");
    this.navCtrl.setRoot(TabsPage).catch();
  }

  presentToast(text){
    const toast = this.toastController.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }
}
