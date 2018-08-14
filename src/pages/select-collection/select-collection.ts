import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';

/**
 * Generated class for the SelectCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-collection',
  templateUrl: 'select-collection.html',
})
export class SelectCollectionPage {
  // 1  order- 2 subscription
  type: number;

  home: any;
  confirmPacKage: any;
  SelectCollection_back: any;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private translate : TranslateService,
     public navParams: NavParams,public plt: Platform) {

    this.type = this.navParams.get('id');

    this.getStrings();

  }

  ionViewDidLoad() {
  }
  makeOrder(collectionType: number = 1) {


    if (this.type == 1) {
      this.navCtrl.push("MakeOrderPage", { collectionType: collectionType });
    }
    else if (this.type == 2) {
      this.navCtrl.push("SubscriptionPage", { collectionType: collectionType });

    }
    else {
      if (collectionType == 1)
        this.navCtrl.push("OurCollectionsPage");

      else
        this.navCtrl.push("CreateYourCollectionsPage");

    }

  } 
   ionViewDidEnter() {
    this.plt.ready().then(()=>{
      this.plt.registerBackButtonAction(()=>this.myHandlerFunction());
})

}
  myHandlerFunction(){
    if(localStorage.getItem("choosedBoxes")){
      let alert = this.alertCtrl.create({
        //title: this.Attention,
        message: this.SelectCollection_back ,
        buttons: [
          {
            text: this.home,
            role: 'cancel',
            handler: () => {
              this.navCtrl.push("TabsPage", {selectedRoot: 2});
            }
          },
          {
            text: this.confirmPacKage,
  
            handler: () => {
              this.navCtrl.push("ConfirmOurPakagesPage")
             
            }
          }
        ]
      });
      alert.present();
    }
   else
     this.navCtrl.push("TabsPage");
   }
   getStrings(){
    this.translate.get(['SelectCollection-back','ConfirmOurPakages-Confirm','TabsPage-Home']).subscribe(
      value => {
       
        this.SelectCollection_back= value["SelectCollection-back"];
        this.home = value["TabsPage-Home"];
        this.confirmPacKage= value["ConfirmOurPakages-Confirm"];
     


      }
    );

  }
}
