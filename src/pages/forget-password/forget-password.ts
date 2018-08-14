import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TranslateService } from '@ngx-translate/core';
import { regexValidators } from '../../providers/validators/validator';
import { ForgotPasswordViewModel } from '../../providers/models/user';
/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  phone: ForgotPasswordViewModel = new ForgotPasswordViewModel();
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider:AuthenticationProvider,
    private formBuilder: FormBuilder,
    private translate: TranslateService) {
     this.credentialsForm = this.formBuilder.group({
      phone_number: [
         '', Validators.compose([
           Validators.pattern(regexValidators.Phone),
           Validators.required
         ])
       ],
      
     });
    }
  ionViewDidLoad() {
  }
  sendCode(){
    
    if (this.credentialsForm.valid) {
      // this.authenticationProvider.forgetPassword(this.phone)
      // .subscribe(
      //     data => {
      //       //console.log(data);
      //       localStorage.setItem("phone_number",this.phone.phone_number);
      //       this.navCtrl.push("ConfirmCodePage");
           
      //     },
      //     error => {
         
           
      //         switch(error.error.error) { 
      //           case "user_not_found": { 
      //            this.translate.get('Login-NotUser').subscribe(
      //              value => {
                    
      //                alert(value);
      //              }
      //            )
               
                  
      //              break; 
      //           } 
      //           case "user_suspended": { 
      //            this.translate.get('Login-userSuspended').subscribe(
      //              value => {
                    
      //                alert(value);
      //              }
      //            ) 
      //              break; 
      //           } 
               
      //           default: { 
      //            this.translate.get('Login-NotUser').subscribe(
      //              value => {
                    
      //                alert(value);
      //              }
      //            )
      //              break; 
      //           } 
      //        } 
                
      //     });
     }
  }

}
