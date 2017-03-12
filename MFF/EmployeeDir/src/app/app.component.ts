import { Component, Renderer } from '@angular/core';
import { Platform, AlertController, App } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { Employees } from '../providers/employees';

@Component({
  templateUrl: 'app.html',
  providers: [Employees]
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform, renderer: Renderer, private app: App, public alertCtrl: AlertController) {

    console.log('--> Constructor finished');

    renderer.listenGlobal('document', 'mfpjsloaded', () => {
      console.log('--> MFP API init complete');

      this.MFPInitComplete();
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log('--> in platform.ready...');
      StatusBar.styleDefault();

    });
  }

  MFPInitComplete() {
    console.log('--> MFPInitComplete function called');

    this.rootPage = TabsPage;

    WLAuthorizationManager.obtainAccessToken().then(
      function (success) {
        console.log('--> WLAuthorizationManager success');
      },
      function (failure) {
        console.log('--> WLAuthorizationManager failure', JSON.stringify(failure))
      })
  }

  //    this.AuthInit();

  // AuthInit(){
  //   this.AuthHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");

  //   this.AuthHandler.handleChallenge = ((response) => {
  //       console.log('--> inside handleChallenge');

  //       if(response.errorMsg){
  //         var msg = response.errorMsg + '<br>';
  //         msg += 'Remaining attempts: ' + response.remainingAttempts;
  //       }

  //       this.displayLogin(msg);
  //   })

  // }

  //   displayLogin(msg) {
  //     let prompt = this.alertCtrl.create({
  //     title: 'Login',
  //     message: msg,
  //     inputs: [
  //       {
  //         name: 'username',
  //         placeholder: 'Username'
  //       },
  //       {
  //         name: 'password',
  //         placeholder: 'Password',
  //         type: 'password'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Login',
  //         handler: data => {
  //           console.log('--> Trying to auth with user', data.username);

  //           this.AuthHandler.submitChallengeAnswer(data);
  //         }
  //       }
  //     ]
  //   });

  //   prompt.present();

  // }

}
