import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';



@IonicPage()
@Component({
  selector: 'page-choose-language',
  templateUrl: 'choose-language.html',
})
export class ChooseLanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private translate: TranslateService) {

  }

  ionViewDidLoad() {
  }

  GOLoginarb() {
    this.platform.setDir('rtl', true);
    this.platform.setLang('ar', true);
    this.translate.use('ar');
    this.navCtrl.push("LoginPage");
    localStorage.setItem('lang', 'ar');

  }
  GOLoginEn() {

    this.platform.setDir('ltr', true);
    this.platform.setLang('en', true);
    this.translate.use('en');
    this.navCtrl.push("LoginPage");
    localStorage.setItem('lang', 'en');

  }
}
