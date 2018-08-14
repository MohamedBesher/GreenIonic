import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TranslateService } from '@ngx-translate/core';

import { ConfirmCodeViewModel } from '../../providers/models/user';
/**
 * Generated class for the ConfirmCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-code',
  templateUrl: 'confirm-code.html',
})
export class ConfirmCodePage {
  
  confirmCode: ConfirmCodeViewModel = new ConfirmCodeViewModel();
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider:AuthenticationProvider,
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
  }

  ionViewDidLoad() {
  }
  GOresetPage(){
 

    if (this.credentialsForm.valid) {
      // this.authenticationProvider.sendConfirmCode(this.confirmCode)
      // .subscribe(
      //     data => {
      //       localStorage.setItem("code",data['token']);
      //       this.navCtrl.push("ResetPasswordPage");
           
      //     },
      //     error => {

      //         console.log("error is "+error.error);
      //         this.translate.get('ConfirmCode-NotValid').subscribe(
      //           value => {
                 
      //             alert(value);
      //           }
      //         );

                
      //     });
     }
  }

}
