import { Component, Renderer } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private rootPage: any;
  AuthHandler: any;

  constructor(platform: Platform, public renderer: Renderer, public alertCtrl: AlertController) {

    renderer.listenGlobal('document', 'mfpjsloaded', () => {
      console.log('--> mfpjsloaded has fired');

      this.AuthInit();

      this.rootPage = TabsPage;

    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }

  AuthInit() {
    console.log('--> In AuthInit()');

    this.AuthHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
    this.AuthHandler.handleChallenge = ((response) => {
      console.log('--> in handleChallenge()');
      this.DisplayLogin();
    });
  }

  DisplayLogin() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter your username and password",
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Login',
          handler: data => {
            console.log('---> Trying to auth with user', data);
            this.AuthHandler.submitChallengeAnswer(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
