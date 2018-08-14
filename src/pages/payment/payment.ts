import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { orderType } from '../../providers/enums/orderType';
import { itemViewModel, Item, boxesViewModel } from '../../providers/models/Dto';
import { Authorized_Pages } from '../../providers/authorized-pages';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { InstantOrder, Order } from '../../providers/models/InstantOrder';
import { Payment_Method } from '../../providers/enums/paymentMethod';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
import { TranslateService } from '@ngx-translate/core';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})

export class PaymentPage {
  details_of_orderType:number=0;
  clicked=false;
  selected_Items: Array<Item> = [];
  orderType: orderType;
  user_lat: string;
  user_lng: string;
  home: string;
  myOrders: string;
  address: string = "";
  paymentMethod: Payment_Method=Payment_Method.Cash;
  payment_error: any;
  payment_sendRequest: any;
  MsgCancel: string;
  Close: any;
  Ok: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private auth: AuthenticationProvider,
    private dataprovider: DataProvider,
    private toastCtrl: ToastServiceProvider,
    public appCtrl: App,
  private translate : TranslateService) {
    this.selected_Items = this.navParams.get('selected_Items');
    this.orderType = this.navParams.get('orderType');
    this.user_lat = this.navParams.get('user_lat');
    this.user_lng = this.navParams.get('user_lng');
    this.address = this.navParams.get('user_address');
    this.getStrings();



    
   
  }

  ionViewCanEnter() {

    let need_authorization: boolean = Authorized_Pages.Check_Page_Need_Authorization("PaymentPage");
    if (need_authorization) {

      if (this.auth.isLoggedIn())
        return true;
      else
        return false
    }
    return true;
  }


  ionViewDidLoad() {
    

  }
  

  confirm() {

    this.clicked=true;
    if (this.orderType  == 1) {
      this.details_of_orderType=2;
      let items: itemViewModel[] = this.map_data(this.selected_Items);
      let request = new InstantOrder(this.paymentMethod, this.user_lng, this.user_lat, this.address, items);
      this.sendRequest(request,Config.instantOrderUrl);
    
    }
    else {
      let joinData = JSON.parse(localStorage.getItem("joinData"));
      let choosedBoxes =localStorage.getItem("choosedBoxes") ? this.map_choosedBoxes():[];
      let items = localStorage.getItem("selected_items") ? this.map_data(JSON.parse(localStorage.getItem("selected_items"))) : [];

      //order
      if (Object.keys(joinData).length == 2) {
        this.details_of_orderType=1;
        let request = new Order(
          this.paymentMethod,
          this.user_lng,
          this.user_lat,
          joinData['period'],
          1,
          1,
          this.address,
          items,
          choosedBoxes,
          joinData['date']
        );
        this.sendRequest(request,Config.orderUrl);

      }
      //subscription
      else {
        this.details_of_orderType=0;
        let request = new Order(
          this.paymentMethod,
          this.user_lng,
          this.user_lat,
          joinData['period'],
          joinData['type_join'],
          joinData['time'],
          this.address,
          items,
          choosedBoxes,
          '',
          joinData['day']
        );
        this.sendRequest(request,Config.orderUrl);
      }

    }

  }

  cancel() {
    let alert = this.alertCtrl.create({
     
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
            this.navCtrl.push("TabsPage");
          }
        }
      ]
    });

    alert.present();
   
  }

  map_data(data) { 
    return data.map(o => {
      return new itemViewModel(o.id, o.count);
    });
  }

  map_choosedBoxes() {

    return JSON.parse(localStorage.getItem("choosedBoxes")).filter(o => o.id != 0).map(o => {
      return new boxesViewModel(o.id, o.counter);
     
    });
  }

  sendRequest(request,url){
    this.dataprovider
          .addWithToken<any>(request, url)
          .subscribe(
            data => {
              if (data.success) {
                // this.toastCtrl.showToast(this.payment_sendRequest);
                localStorage.removeItem("choosedBoxes");
                localStorage.removeItem("selected_items");
                localStorage.removeItem("joinData");


                let alert = this.alertCtrl.create({
                  //title: this.Attention,
                  message: this.payment_sendRequest ,
                  buttons: [
                    {
                      text: this.home,
                      role: 'cancel',
                      handler: () => {
                        this.navCtrl.push("TabsPage", {selectedRoot: 2});
                      }
                    },
                    {
                      text: this.myOrders,
            
                      handler: () => {
                        this.navCtrl.push("TabsPage", {selectedRoot: 1,"orderType":this.details_of_orderType})
                       // this.navCtrl.push("TabsPage", {selectedRoot: 1});
                      }
                    }
                  ]
                });
                alert.present();
             
         

            // this.navCtrl.push("TabsPage", {selectedRoot: 1});

              }
             
            },
            error => {
              //alert(error.error.error);

                 
                  alert(this.payment_error);
             
            });
    
  }

  getStrings(){
    this.translate.get(['payment-error','payment-sendRequest','TabsPage-Home','TabsPage-MyOrders','OrderDetails-Close','OrderDetails-Ok','OrderDetails-Cancelation']).subscribe(
      value => {
        this.payment_error = value["payment-error"];
        this.payment_sendRequest= value["payment-sendRequest"];
        this.home = value["TabsPage-Home"];
        this.myOrders= value["TabsPage-MyOrders"];
        this.MsgCancel = value["OrderDetails-Cancelation"];
        this.Ok = value["OrderDetails-Ok"];
        this.Close = value["OrderDetails-Close"];


      }
    );

  }
}


