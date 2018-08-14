import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { registerViewModel } from '../../providers/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { regexValidators } from '../../providers/validators/validator';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user: registerViewModel = new registerViewModel();
  credentialsForm: FormGroup;
  notMatch: boolean=false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationProvider:AuthenticationProvider,
    private formBuilder: FormBuilder,
    private translate: TranslateService) {
     this.credentialsForm = this.formBuilder.group({
      name: [
        '', Validators.compose([
          Validators.required,
        
        ])
      ],
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
        password_confirmation: [
        '', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ], 

     });

    
 }

 submit(){
  if (this.credentialsForm.valid) {
    if(this.user.password === this.user.password_confirmation){
      this.notMatch=false;
   //console.log("register user"+JSON.stringify(this.user));
  //  this.authenticationProvider.register(this.user)
  //  .subscribe(
  //      data => {
  //        //console.log(data);
  //        this.navCtrl.push("RegisteConfirmCodePage");
        
  //      },
  //      error => {
      
        
  //          //console.log("error is "+error.error);
  //          if(error.error.error.phone_number){
  //           this.translate.get('SignUp-phoneExist').subscribe(
  //                   value => {
                     
  //                     alert(value);
  //                   }
  //                 );
  //          }
  //          else{
  //           this.translate.get('SignUp-NotValid').subscribe(
  //             value => {
               
  //               alert(value);
  //             }
  //           )
  //          }
  //         //  switch(error.error.error) { 
  //         //    case "user_not_found": { 
  //         //     this.translate.get('Login-NotUser').subscribe(
  //         //       value => {
                 
  //         //         alert(value);
  //         //       }
  //         //     )
            
               
  //         //       break; 
  //         //    } 
  //         //    case "user_suspended": { 
  //         //     this.translate.get('Login-userSuspended').subscribe(
  //         //       value => {
                 
  //         //         alert(value);
  //         //       }
  //         //     ) 
  //         //       break; 
  //         //    } 
            
  //         //    default: { 
  //         //     this.translate.get('Login-NotUser').subscribe(
  //         //       value => {
                 
  //         //         alert(value);
  //         //       }
  //         //     )
  //         //       break; 
  //         //    } 
  //         // } 
             
  //      });
      }
      else{
        this.notMatch=true;
      }
    }
 }
 Gologin(){
    this.navCtrl.push("LoginPage");
  }
}
