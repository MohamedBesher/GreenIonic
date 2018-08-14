
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Navbar } from 'ionic-angular';
import { Item } from '../../providers/models/Dto';
import { orderType } from '../../providers/enums/orderType';
/**
 * Generated class for the YourCollectionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-your-collection-details',
  templateUrl: 'your-collection-details.html',
})
export class YourCollectionDetailsPage {
  @ViewChild(Navbar) navBar: Navbar;
  selected_Items_total: number;
  selected_Items: Array<Item> = [];
  DeliveryPrice: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.selected_Items = JSON.parse(localStorage.getItem("selected_items"));

  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
      localStorage.setItem("selected_items", JSON.stringify(this.selected_Items));
      this.navCtrl.pop();
      
     }
  }


  remove_from_list($event) {
   
    this.selected_Items = this.selected_Items.filter(
      item => item.id !== $event.id);
      // if (this.selected_Items.length==0){
      //   let choosedBoxes = JSON.parse(localStorage.getItem("choosedBoxes")) ;
      //   choosedBoxes = choosedBoxes.filter(
      //     item => item.id !== 0);
  
      //  localStorage.setItem("choosedBoxes", JSON.stringify(choosedBoxes));
      // }


  }


  back() {
    localStorage.setItem("selected_items", JSON.stringify(this.selected_Items));
    this.navCtrl.pop();
    //this.navCtrl.push("ConfirmOurPakagesPage");
  }
  change_Kilo_count($event) {



    let item_Exist = this.item_Not_selected($event.id);
    // item is already added and need to change kilo count
    if (item_Exist.length > 0) {

      if ($event.Kilo_count == 0) {
        this.selected_Items = this.selected_Items.filter(
          item => item.id !== $event.id);
      }
      else {
        let select_Item = this.selected_Items.filter(
          item => item.id === $event.id);
        select_Item[0]["count"] = $event.Kilo_count;
      }
    }

  }



  item_Not_selected(id) {
    let Item = this.selected_Items.filter(
      item => item.id === id);

    return Item;
  }

  edit_items() {
    //let paramObj = { selected_items: this.selected_Items };
    localStorage.setItem("selected_items", JSON.stringify(this.selected_Items));
    this.navCtrl.push("CreateYourCollectionsPage");
  }



}
