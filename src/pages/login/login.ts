import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { loginViewModel } from '../../providers/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexValidators } from '../../providers/validators/validator';

import { TranslateService } from '@ngx-translate/core';
import { Device } from '../../../node_modules/@ionic-native/device';
import { testNativeHttpProvider } from '../../providers/authentication/testNativeHttp';


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
  clicked = false;
  user: loginViewModel = new loginViewModel();
  show_loading: boolean;
  is_connected: boolean = false;
  network_available: boolean = true;
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
   private testNativeHttpProvider:testNativeHttpProvider,
    private authenticationProvider: AuthenticationProvider,
    private formBuilder: FormBuilder,
    private device: Device,
    private translate: TranslateService,
    public appCtrl: App,



  ) {

    this.credentialsForm = this.formBuilder.group({
      phone_number: [
        '', Validators.compose([
          Validators.pattern(regexValidators.Phone),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ],
    });
    this.user.deviceId = this.device.uuid;
    console.log("deviceId  "+this.device.uuid ); 
    console.log("choosed boxes  "+localStorage.getItem("choosedBoxes"),
    localStorage.getItem("selected_items"),
    localStorage.getItem("joinData")); 
  }


  ionViewDidEnter() {
    

  }
  
  submit() {
    if (this.credentialsForm.valid) {
      this.clicked = true;
     var login = this.testNativeHttpProvider.login(this.user);
      // this.authenticationProvider.login(this.user)
      //   .subscribe(
      //     data => {
      //       this.navCtrl.push("TabsPage");

      //     },
      //     error => {
      //       this.clicked = false;
      //       //console.log("error is "+error.error);
      //       if(error.status==400){
      //           switch (error.error.error) {
      //         case "user_not_found": {
      //           this.translate.get('Login-NotUser').subscribe(
      //             value => {

      //               alert(value);
      //             }
      //           )


      //           break;
      //         }
      //         case "user_suspended": {
      //           this.translate.get('Login-userSuspended').subscribe(
      //             value => {

      //               alert(value);
      //             }
      //           )
      //           break;
      //         }

      //         default: {
      //           this.translate.get('Login-NotUser').subscribe(
      //             value => {

      //               alert(value);
      //             }
      //           )
      //           break;
      //         }
      //       }
      //       }
      //       else if(error.status==0){
      //         this.translate.get('No-internet-found').subscribe(
      //           value => {

      //             alert(value);
      //           }
      //         )
      //       }
          

      //     });
    }
  }
  ForgetPassword() {
    this.navCtrl.push("ForgetPasswordPage");

  }
  //as avistore
  GOhome() {
    this.appCtrl.getRootNav().setRoot("TabsPage");

    // this.navCtrl.push("TabsPage");

  }
  Goregister() {
    this.navCtrl.push("SignUpPage");

  }
  ionViewDidLoad() {

  }

}
