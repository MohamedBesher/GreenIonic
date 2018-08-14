import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TranslateService} from '@ngx-translate/core';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  userName=localStorage.getItem("userInfo")?JSON.parse( localStorage.getItem("userInfo"))['name']:'';
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private platform:Platform,
      private translate:TranslateService,
      private authenticationProvider:AuthenticationProvider,
      public plt: Platform, 
    ) {
      this.translate.use( localStorage.getItem('lang'));
  }


  ionViewDidEnter()
{
  this.plt.ready().then(() => {
    this.plt.registerBackButtonAction(() => this.myHandlerFunction());
  })
}

myHandlerFunction() {
  this.navCtrl.push("TabsPage");

}

  ionViewDidLoad() {
  }
  ContactUs() {
    this.navCtrl.push("ContactUsPage");
  
  }
  EditPage() {
    this.navCtrl.push("EditProfilePage");

  }
  AboutUS() {
    this.navCtrl.push("AboutUsPage");
   
  }
  changeDirection() {
    if (this.platform.isRTL) {
      this.platform.setDir('ltr', true);
      this.platform.setLang('en',true);

      this.translate.use('en');

      localStorage.setItem('lang', 'en');

    }
    else {
      this.platform.setDir('rtl', true);
      this.platform.setLang('ar',true);
      this.translate.use('ar');

      localStorage.setItem('lang', 'ar');
    }
  }
  LogOut(){
    this.authenticationProvider.logout()
    .subscribe(
        data => {
          console.log(data);
          localStorage.removeItem('currentUser');
          localStorage.removeItem('userInfo');
          this.navCtrl.push("LoginPage");
         
        },
        error => {
            console.log("error is "+error.error); 
            
               this.translate.get('MyProfile-error').subscribe(
                 value => {
                  
                   alert(value);
                 }
               )
                
        });

  }
}
