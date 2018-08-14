import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Navbar } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  cancelorderError: any;
  cancelSubError: any;
  cancelorder: any;
  cancelSub: string;
  @ViewChild(Navbar) navBar: Navbar;
  Ok: string;
  Close: string;
  Attention: string;
  items: Array<any> = [];
  boxes: Array<any> = [];
  orderDetails: any;
  deliveryTime: Array<any> = [];
  details_of_order: Array<any> = [];
  status: number;
  MsgCancel: string;
  toast: any;
  details_of_orderType: number;
  photoUrl: string = Config.photoURl;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataService: DataProvider, private toastCtrl: ToastController, private alertCtrl: AlertController, private translate: TranslateService) {
    this.orderDetails = this.navParams.get('OrderDetails');
    console.log(this.orderDetails);
    this.status = this.orderDetails.status;
  }

  ionViewDidLoad() {

    this.navBar.backButtonClick = (e: UIEvent) => {
      this.$ionicGoBack();
    }
    this._dataService
      .getSingleToken<any>(this.orderDetails.id, Config.detailsOfOrderUrl)
      .subscribe(
        data => {
          console.log(data);
          this.deliveryTime = data.dates;
          this.details_of_order = data.details_of_order;
          this.details_of_orderType = data.details_of_order[0].type;
          this.boxes = data.boxes;
          // this.items = data.items;
        },
        error => {
          console.log(error);

        });
  }
  itemDetails(id) {

    // this.navCtrl.push("OrderItemsDetailsPage", { "BoxId": id, "items": this.items });
    this.navCtrl.push("OrderItemsDetailsPage", { "BoxId": id, "orderDetails": this.orderDetails.id });
  }
  cancel() {
    this.presentConfirm();
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentConfirm() {
    this.translate.get('OrderDetails-Cancelation').subscribe(
      value => {
        this.MsgCancel = value;
      }
    );
    this.translate.get('OrderDetails-Attention').subscribe(
      value => {
        this.Attention = value;
      }
    );
    this.translate.get('OrderDetails-Close').subscribe(
      value => {
        this.Close = value;
      }
    );
    this.translate.get('OrderDetails-Ok').subscribe(
      value => {
        this.Ok = value;
      }
    );
    this.translate.get('OrderDetails-cancelSub').subscribe(
      value => {
        this.cancelSub = value;
      }
    );
    this.translate.get('OrderDetails-cancelorder').subscribe(
      value => {
        this.cancelorder = value;
      }
    );
    this.translate.get('OrderDetails-cancelSubError').subscribe(
      value => {
        this.cancelSubError = value;
      }
    );
    this.translate.get('OrderDetails-cancelorderError').subscribe(
      value => {
        this.cancelorderError = value;
      }
    );
 
    "OrderDetails-cancelorderError"
    
    

    let alert = this.alertCtrl.create({
      // title: this.Attention,
      message: this.MsgCancel,
      buttons: [
        {
          text: this.Close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.Ok,

          handler: () => {
            console.log('Buy clicked');
            //Cancel subscription 
            if (this.details_of_order[0].type == 0) {
              this._dataService
                .cancel<any>(this.orderDetails.id, Config.cancelSubscriptionUrl)
                .subscribe(
                  data => {
                    if(data.success){
                    let alertMsg = this.alertCtrl.create({
                      // message: data.success,
                      message: this.cancelSub,
                      
                      buttons: [
                        {
                          text: this.Close,
                          role: 'cancel',

                        },
                      ]
                    });
                    alertMsg.present();
                  }
                    this.navCtrl.push("TabsPage", { selectedRoot: 1, "orderType": this.details_of_orderType });

                  },
                  error => {
                    if(error.error.error){
                    let alertMsg = this.alertCtrl.create({
                      message: this.cancelSubError,
                      buttons: [
                        {
                          text: this.Close,
                          role: 'cancel',
                        },
                      ]
                    });
                    alertMsg.present();}
                    // this.presentToast(error.error.error)
                  });
            }
            //Cancel Order 
            else if (this.details_of_order[0].type == 1) {
              this._dataService
                .cancel<any>(this.orderDetails.id, Config.cancelOrderUrl)
                .subscribe(
                  data => {
                    if(data.success){
                    let alertOrder = this.alertCtrl.create({
                      // message: data.success,
                      message:this.cancelorder,
                      buttons: [
                        {
                          text: this.Close,
                          role: 'cancel',
                        },
                      ]
                    });
                    alertOrder.present();
                  }
                    this.navCtrl.push("TabsPage", { selectedRoot: 1, "orderType": this.details_of_orderType });

                  },
                  error => {
                    if(error.error.error){
                    let alertOrder = this.alertCtrl.create({

                      message: this.cancelorderError,
                      buttons: [
                        {
                          text: this.Close,
                          role: 'cancel',

                        },
                      ]
                    });
                    alertOrder.present();
                  }
                  });
            }
          }
        }
      ]
    });

    alert.present();
  }

  $ionicGoBack() {

    // localStorage.setItem("orderType", (this.details_of_orderType).toString());
    this.navCtrl.push("TabsPage", { selectedRoot: 1, "orderType": this.details_of_orderType });

    //  this.navCtrl.push("TabsPage", {selectedRoot: 1});
  }
}
