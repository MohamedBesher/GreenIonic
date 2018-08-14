import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Item } from '../../providers/models/Dto';
import {orderType} from '../../providers/enums/orderType';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-confirm-delivery',
  templateUrl: 'confirm-delivery.html',
})
export class ConfirmDeliveryPage {
  selected_Items_total: number;
  selected_Items: Array<Item> = [];
  DeliveryPrice: number;
  min_price: number;
  order_exceeds_min_msg: string;
  show_loading: boolean;

  constructor(public navCtrl: NavController, 
    private toastCtrl: ToastServiceProvider,
    public navParams: NavParams,
    public appCtrl: App,   
     private translate: TranslateService,


  ) {
    
    this.start_page();
  }

  ionViewDidLoad() {
  }



  ionViewDidEnter() {
  }

  start_page()
  {
    this.selected_Items=localStorage.getItem('selected_items') ? JSON.parse(localStorage.getItem('selected_items')): [];
    this.get_strings();
    this.get_delivery_fee();
    this.get_min_price();
    this.calculate_Total();
  }

  remove_from_list($event)
  {

    this.selected_Items= this.selected_Items.filter(
      item => item.id !== $event.id);

      this.calculate_Total();  
      localStorage.setItem("selected_items",JSON.stringify(this.selected_Items));

  }


  back()
  {
    this.navCtrl.push("TabsPage");
  }


  change_Kilo_count($event)
{
  
  

let item_Exist=this.item_Not_selected($event.id);
// item is already added and need to change kilo count
if(item_Exist.length>0)
{

  if($event.Kilo_count==0)
  {
   this.selected_Items= this.selected_Items.filter(
      item => item.id !== $event.id);
  }
  else
  {
    let select_Item = this.selected_Items.filter(
    item => item.id === $event.id);
    select_Item[0]["count"]=$event.Kilo_count;
  }
}
this.calculate_Total();    

localStorage.setItem("selected_items",JSON.stringify(this.selected_Items));

}

get_strings() {
  this.translate.get(['selectItemsDelivery-order-exceeds-min']
  )
    .subscribe(value => {
      this.order_exceeds_min_msg = value['selectItemsDelivery-order-exceeds-min'];

    }
    )
}

item_Not_selected(id)
{
  let Item = this.selected_Items.filter(
    item => item.id === id);

    return Item;
}


total_Exceeds_min(): boolean {
  return this.selected_Items_total >= this.min_price;
 }

calculate_Total()
{
  if (this.selected_Items.length>0)
  {
    let arr:any=this.selected_Items.map(x => x.count *  (x.deliever_priceAfterDiscount==0 ? x.deliever_price : x.deliever_priceAfterDiscount));
    let sum : number = arr.reduce((sum, current) => sum + current);
    this.selected_Items_total=sum;

  }
  else
  {
    this.selected_Items_total=0;
  }
  

}

get_delivery_fee(): any {
  this.DeliveryPrice = Number(localStorage.getItem("delivery_fee"));  
}

get_min_price()
   {
   let min_price=localStorage.getItem("order_min_price");
   if (min_price!=null)
    this.min_price=Number(min_price);
   else 
    this.min_price=25;
   }

edit_items()
{
 // let paramObj = { selected_items: this.selected_Items };
 localStorage.setItem("selected_items",JSON.stringify(this.selected_Items));
  this.navCtrl.push("SelectItemsDeliveryPage"); 
}

confirm()
{
  localStorage.setItem("selected_items",JSON.stringify(this.selected_Items));

  if(!this.total_Exceeds_min())
  {
    this.order_exceeds_min_msg=this.order_exceeds_min_msg.replace("25",this.min_price.toString());
    this.toastCtrl.showToast(this.order_exceeds_min_msg);
    return;

  }

  //.getRootNavById()
//   this.appCtrl.getRootNav().push("GetYourLocationPage", {
//     orderType:orderType.Delivery,
//     selected_Items:this.selected_Items}); 

//  }

 this.navCtrl.push("GetYourLocationPage", {
  orderType:orderType.Delivery}); 

}

}
