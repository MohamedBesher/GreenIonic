import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TranslateService } from '@ngx-translate/core';

import {  ConfirmregisterViewModel } from '../../providers/models/user';
import { Device } from '../../../node_modules/@ionic-native/device';

/**
 * Generated class for the RegisteConfirmCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registe-confirm-code',
  templateUrl: 'registe-confirm-code.html',
})
export class RegisteConfirmCodePage {

 
  user: ConfirmregisterViewModel = new ConfirmregisterViewModel();
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider:AuthenticationProvider,
    private device: Device,
    private formBuilder: FormBuilder,
    private translate: TranslateService) {

    this.credentialsForm = this.formBuilder.group({
      code: [
         '', Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(6),
           Validators.required
         ])
       ],
      
     });

     this.user.deviceId=this.device.uuid;

  }

  ionViewDidLoad() {
  }
  GOLogin(){
 

    if (this.credentialsForm.valid) {
      // this.authenticationProvider.sendRegisterConfirmCode(this.user)
      // .subscribe(
      //     data => {
          
      //       this.navCtrl.push("TabsPage");
           
      //     },
      //     error => {

      //         this.translate.get('ConfirmCode-NotValid').subscribe(
      //           value => {
                 
      //             alert(value);
      //           }
      //         );

                
      //     });
     }
  }

}
