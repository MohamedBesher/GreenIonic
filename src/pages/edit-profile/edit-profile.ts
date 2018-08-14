import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { loginViewModel } from '../../providers/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TranslateService } from '@ngx-translate/core';
import { regexValidators } from '../../providers/validators/validator';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  user: loginViewModel =JSON.parse( localStorage.getItem("userInfo"));
  credentialsForm: FormGroup;

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
      email: [
         '', Validators.compose([
           Validators.pattern(regexValidators.email),
         
         ])
       ],
       phone_number:[
        '', Validators.compose([
          Validators.required
        ])
       ]

     });

    
 }

  ionViewDidLoad() {
  }
  submit(){
    if (this.credentialsForm.valid) {
     
    //  this.authenticationProvider.editProfile(this.user)
    //  .subscribe(
    //      data => {
    //        localStorage.setItem('userInfo',  JSON.stringify(this.user));
    //        this.navCtrl.push("TabsPage",{selectedRoot: 0});
          
    //      },
    //      error => {
        
          
    //          if(error.error.error.email){
    //           this.translate.get('EditProfile-emailexist').subscribe(
    //                   value => {
                       
    //                     alert(value);
    //                   }
    //                 );
    //          }
    //          else{
    //           this.translate.get('EditProfile-error').subscribe(
    //             value => {
                 
    //               alert(value);
    //             }
    //           )
    //          }
            
               
    //      });
       
      }
   }

}
