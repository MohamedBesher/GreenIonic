import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Item } from '../../providers/models/Dto';
import { Box } from '../../providers/models/box';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { orderType } from '../../providers/enums/orderType';
/**
 * Generated class for the ConfirmOurPakagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-our-pakages',
  templateUrl: 'confirm-our-pakages.html',
})
export class ConfirmOurPakagesPage {



  choosedBoxes: Array<Box> = [];
  DeliveryPrice = 0;
  orderPrice = 0;
  totalPrice = 0;
  min_price: number;
  order_exceeds_min_msg: string;
  selected_Items_total: number;
  selected_Items: Array<Item> = [];
  your_groups: string;
  selected_Items_Desc: any;
  selected_Items_kilo: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translate: TranslateService,
    private toastCtrl: ToastServiceProvider,
    public appCtrl: App) {
    console.log(this.navCtrl.getViews());

    this.get_strings();
    this.get_min_price();

  }
 
  ionViewWillEnter() {
    this.selected_Items = localStorage.getItem("selected_items") ?
    JSON.parse(localStorage.getItem("selected_items")) : [];

    this.choosedBoxes = localStorage.getItem("choosedBoxes") ?
      (JSON.parse(localStorage.getItem("choosedBoxes"))).map(item => new Box(item)) : [];
    this.load_my_collection();
    this.calculate_choosedBoxes_Total();
  }
  ionViewDidLoad() {
  }


  load_my_collection(): any {
  
    if (this.selected_Items != undefined && this.selected_Items.length > 0) {

      this.calculate_Total();
      if (this.choosedBoxes.length > 0) {
        let your_groups_exists = this.choosedBoxes.filter(x => x.id == 0);
        if (your_groups_exists.length > 0) {
          your_groups_exists[0]["id"] = 0;
          your_groups_exists[0]["name"] = this.your_groups;
          your_groups_exists[0]["description"] = this.selected_Items_Desc;
          your_groups_exists[0]["total"] = this.selected_Items_total;
          your_groups_exists[0]["image"] = "assets/images/ourgroup.png";
          your_groups_exists[0]["size"] = this.selected_Items_kilo;
          your_groups_exists[0]["type"] = 0;
        }
        else {
          this.add_my_collection();
          localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
        }
      }
      else {
        this.add_my_collection();
        this.calculate_Total();
        localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
      }



    }
    else {
      let index = this.choosedBoxes.findIndex(b => b.id == 0);
      if (index != -1) {
        this.choosedBoxes.splice(index, 1);

        localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
      }
      this.calculate_Total();
    }


  }
  add_my_collection(): any {
    this.choosedBoxes.push(new Box({
      id: 0,
      name: this.your_groups,
      description: this.selected_Items_Desc,
      total: this.selected_Items_total,
      image: "assets/images/ourgroup.png",
      size: this.selected_Items_kilo,
      type: 0
    }));
    this.calculate_choosedBoxes_Total();

  }
  calculate_choosedBoxes_Total(): any {

    this.DeliveryPrice = Number(localStorage.getItem("delivery_fee"));
    if (this.choosedBoxes.length > 0) {
      let prices: any = this.choosedBoxes.map(x => x.total);
      this.orderPrice = prices.reduce((sum, current) => sum + current);
      this.totalPrice = this.orderPrice + this.DeliveryPrice;
    }
    else {
      this.totalPrice = this.DeliveryPrice;
      this.orderPrice = 0;
    }

  }
  calculate_Total() {
    if (this.selected_Items.length > 0) {
      let arrNames: any = this.selected_Items.map(x => x.name);
      this.selected_Items_Desc = arrNames.reduce((sum, current) => `${sum} , ${current}`);



      let kiloCount: any = this.selected_Items.map(x => x.count);
      this.selected_Items_kilo = kiloCount.reduce((sum, current) => sum + current);


      let arr: any = this.selected_Items.map(x => x.count * x.price);
      let sum: number = arr.reduce((sum, current) => sum + current);
      this.selected_Items_total = sum;
    }
    else {
      this.selected_Items_total = 0;

    }


  }
  editAdd() {
    localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
    this.navCtrl.push("SelectCollectionPage");

  }

  removeItem($event) {

    let index = this.choosedBoxes.findIndex(b => b.id == $event.id);
    this.choosedBoxes.splice(index, 1);
    localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
    if ($event.id == 0) {
      localStorage.setItem("selected_items", "");
    }
    this.orderPrice -= $event.price;
    this.totalPrice -= $event.price;

  }
  increase($event) {
    let select_Item = this.choosedBoxes.filter(
      item => item.id === $event.id);
    select_Item[0]["counter"] = $event.counter;
    this.orderPrice += $event.price;
    this.totalPrice += $event.price;

  }
  decrease($event) {
    if (this.orderPrice == 0) {
      this.removeItem($event);
    }
    else {
      let select_Item = this.choosedBoxes.filter(
        item => item.id === $event.id);
      select_Item[0]["counter"] = $event.counter;
      this.orderPrice -= $event.price;
      this.totalPrice -= $event.price;
    }
  }
  SetLocation() {
    if (this.total_Exceeds_min()) {
      localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
      //.getRootNavById(this.navCtrl.getActive().id)
      // this.appCtrl.getRootNav().push("GetYourLocationPage");
      this.navCtrl.push("GetYourLocationPage" ,{
        orderType:orderType.Order});

    }
    else {
      this.translate.get(['selectItemsDelivery-order-exceeds-min']
      )
        .subscribe(value => {
          this.order_exceeds_min_msg = value['selectItemsDelivery-order-exceeds-min'];

        }
        );
      this.order_exceeds_min_msg = this.order_exceeds_min_msg.replace("25", this.min_price.toString());
      this.toastCtrl.showToast(this.order_exceeds_min_msg);

    }

  }
  back() {
    localStorage.removeItem("choosedBoxes");
    this.navCtrl.push("TabsPage");
  }

  total_Exceeds_min(): boolean {
    return this.orderPrice >= this.min_price;
  }
  get_min_price() {
    let min_price = localStorage.getItem("order_min_price");
    if (min_price != null)
      this.min_price = Number(min_price);
    else
      this.min_price = 25;
  }
  BoxDetails($event) {
    if ($event.id == 0)

      this.navCtrl.push("YourCollectionDetailsPage");
    else
      this.navCtrl.push("CartoonDetailsPage", { "id": $event.id });
  }
  get_strings() {
    this.translate.get(['selectCollection-YourGroups']
    )
      .subscribe(value => {
        this.your_groups = value["selectCollection-YourGroups"];

      }
      )
  }
}



