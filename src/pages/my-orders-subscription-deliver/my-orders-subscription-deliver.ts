import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, InfiniteScroll, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyOrder } from '../../providers/models/user';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-my-orders-subscription-deliver',
  templateUrl: 'my-orders-subscription-deliver.html',
})
export class MyOrdersSubscriptionDeliverPage {
  view_orders:any;
  orderType: number;
  Order: Array<any> = []
  type: MyOrder;
  indexSelected: string;
  HideSub: boolean = false;
  HideOrder: boolean = false;
  HideConv: boolean = false;
  doInfiniteDeli: boolean = false;
  doInfiniteOrder: boolean = false;
  doInfiniteSub: boolean = false;
  loadingPopup: any;
  page = 1;
  order_count: number;
  infiniteScroll: InfiniteScroll;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private _dataService: DataProvider, 
      private socialSharing: SocialSharing, 
      public plt: Platform, 
      private translate: TranslateService, public loadingCtrl: LoadingController) {
    // this.orderType = navParams.data;

  }
  ionViewDidEnter() {
 
     this.orderType = this.navParams.data;
    this.navParams.data={};
    // this.orderType = (localStorage.getItem("orderType"))?Number(localStorage.getItem("orderType")):null;
    // localStorage.removeItem ("orderType");
    this.plt.ready().then(() => {
      this.plt.registerBackButtonAction(() => this.myHandlerFunction());
    })

    this.doInfiniteSub = true;
    // if ( this.orderType != null) {
      if (typeof this.orderType != "object") {
      this.type = { lang: this.plt.lang(), type: this.orderType, page: this.page, pageSize: 10 }
      this.view_orders=this.orderType;
    }
    else {
      this.type = { lang: this.plt.lang(), type: 0, page: this.page, pageSize: 10 }
      this.view_orders="0";
    }
      this.checkIndex(this.view_orders);
  }


  checkIndex(index) {

    this.type.type = index;
    if (index == 0) {
      this.translate.get('Home-sub').subscribe(
        value => {
          this.indexSelected = value;
        }
      );
     
      this.doInfiniteDeli = false;
      this.doInfiniteOrder = false;
      this.doInfiniteSub = true;
      this.page = 1;
      this.view_orders="0";
      this.orderType=0;
      
    }
    else if (index == 1) {
      this.translate.get('Home-order').subscribe(
        value => {
          this.indexSelected = value;
        }
      );
      this.doInfiniteDeli = false;
      this.doInfiniteOrder = true;
      this.doInfiniteSub = false;
      this.page = 1;
      this.view_orders="1";
      this.orderType=1;
    }
    else if (index == 2) {
      this.translate.get('Home-conveyance').subscribe(
        value => {
          this.indexSelected = value;
        }
      );
      this.doInfiniteDeli = true;
      this.doInfiniteOrder = false;
      this.doInfiniteSub = false;
      this.page = 1;
      this.view_orders="2";
      this.orderType=2;
    }

    this.loadData();
  }


  shareLink() {
    this.socialSharing.share('Message and link', null, null, "http://onelink.to/bkqgmq");
  }

  loadData() {
    // Create the popup
    this.loadingPopup = this.loadingCtrl.create({});
    // Show the popup
    this.loadingPopup.present();


    // if ( this.orderType != null) { 
      if (typeof this.orderType != "object") {
    
      this.type = new MyOrder(this.plt.lang(), this.orderType, this.page, 10);
    }
    else {
   
      this.type = new MyOrder(this.plt.lang(), this.type.type, this.page, 10);
      
    }
    this._dataService
      .addWithToken<any>(this.type, Config.showOrder)
      .subscribe(
        data => {
          this.order_count = data.order_count;
          this.Order = data.order;
          console.log(data);
          console.log(this.type.type);

          if (this.Order.length == 0) {
            if (this.type.type == 0)
              this.HideSub = true;

            if (this.type.type == 1)
              this.HideOrder = true;

            if (this.type.type == 2)
              this.HideConv = true;

            this.doInfiniteDeli = false;
            this.doInfiniteOrder = false;
            this.doInfiniteSub = false;
          }


          this.loadingPopup.dismiss();
        },
        error => {

          console.log("error");

        });
  }
  myHandlerFunction() {
    this.navCtrl.push("TabsPage");

  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.page++;
    // if ( this.orderType != null) {
      if (typeof this.orderType != "object") {
      this.type = new MyOrder(this.plt.lang(), this.orderType, this.page, 10);
    }
    else {
 
      this.type = new MyOrder(this.plt.lang(), this.type.type, this.page, 10);
    }
    setTimeout(() => {

      this._dataService
        .addWithToken<any>(this.type, Config.showOrder)

        .subscribe(
          data => {

            data.order.forEach(element => {
              this.Order.push(element);
            });
          },
          error => {
            console.log(error);

          });
      console.log('Async operation has ended');
      infiniteScroll.complete();
      if (this.Order.length >= this.order_count) {
        infiniteScroll.enable(false);
      }
    }, 1000);
  }
}/*end class*/




