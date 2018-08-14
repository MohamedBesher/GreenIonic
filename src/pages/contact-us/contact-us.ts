import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';


import { ContactModel } from '../../providers/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexValidators } from '../../providers/validators/validator';
/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  user: ContactModel = new ContactModel();
  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataService: DataProvider, private formBuilder: FormBuilder,
    private alertCtrl: AlertController) {
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
      message: [
        '', Validators.compose([
          Validators.required
        ])
      ]

    });
  }

  ionViewDidLoad() {
  }
  submit() {
    if (this.credentialsForm.valid) {

      this._dataService
        .add<any>(this.user, Config.contactUsUrl)
        .subscribe(
          data => {

            // let toast = this.toastCtrl.create({
            //   message: 'message was send successfully',
            //   duration: 3000,
            //   position: 'middle'
            // });

            // toast.onDidDismiss(() => {
            //   console.log('Dismissed toast');
            // });

            // toast.present();

            let alert = this.alertCtrl.create({
              //title: this.Attention,
              message: 'message was send successfully',
              buttons: [
                {
                  text: 'close',
                  role: 'cancel',
        
                }
              ]
            });
            alert.present();
            this.navCtrl.push("TabsPage", { selectedRoot: 0 });
            console.log(data);


          },
          error => {

            console.log("error");

          });

    }
  }
}
