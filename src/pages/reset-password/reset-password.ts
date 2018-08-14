import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPasswordViewModel } from '../../providers/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  notMatch: boolean=false;
  ResetPassword: ResetPasswordViewModel = new ResetPasswordViewModel();
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider:AuthenticationProvider,
    private formBuilder: FormBuilder,
    private translate: TranslateService) {
     this.credentialsForm = this.formBuilder.group({
      password: [
        '', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])
      ],
      password_confirmation : [
        '', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ],
      
     });
    }
  ionViewDidLoad() {
  }
  resetPassword(){
    
    if (this.credentialsForm.valid) {
      if(this.ResetPassword.password === this.ResetPassword.password_confirmation){
        this.notMatch=false;
      // this.authenticationProvider.resetPassword(this.ResetPassword)
      // .subscribe(
      //     data => {
          
      //       this.navCtrl.push("LoginPage");
           
      //     },
      //     error => {
         
           
              
      //         this.translate.get('ConfirmCode-NotValid').subscribe(
      //           value => {
                 
      //             alert(value);
      //           }
      //         );
                
      //     });
     }
     else{
      this.notMatch=true;
    }

    }

  }

}
