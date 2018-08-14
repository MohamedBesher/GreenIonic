import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Config } from '../../providers/config';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the OrderItemsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-items-details',
  templateUrl: 'order-items-details.html',
})
export class OrderItemsDetailsPage {
  orderDetailsId: number;
  items:Array<any>=[];
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataService: DataProvider,public plt: Platform) {
   this.id=this.navParams.get('BoxId');
  
  //  this.items=this.navParams.get('items');
  this.orderDetailsId = this.navParams.get('orderDetails');
   console.log(this.items);
  }


  ionViewDidLoad() {
    this._dataService
    .getSingleToken<any>(this.orderDetailsId, Config.detailsOfOrderUrl)
    .subscribe(
      data => {
        console.log(data);
        // this.items = data.items;
        this.items = data.items.filter(items => (items['box_id']==this.id));
      },
      error => {
        console.log(error);

      });

    // this.items = this.items.filter(items => (items['box_id']==this.id));
    // console.log(this.items);



  }
  ionViewDidEnter() {
    this.plt.ready().then(()=>{
      this.plt.registerBackButtonAction(()=>this.myHandlerFunction());
})

}
myHandlerFunction(){
  this.navCtrl.pop();
 }}