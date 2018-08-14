import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
/**
 * Generated class for the CartoonDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartoon-details',
  templateUrl: 'cartoon-details.html',
})
export class CartoonDetailsPage {
  BoxDetails:any;
  boxes:Array<any>=[];
  boxName:string;
  priceBox:number;
  choosedBoxes: Array<any> = [];
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataService: DataProvider) {
    this.choosedBoxes=localStorage.getItem("choosedBoxes")?JSON.parse(localStorage.getItem("choosedBoxes")):[];
    this.BoxDetails=this.navParams.get('BoxDetails');
    this.id=this.navParams.get('id');
  }

  ionViewDidLoad() {
    let id=this.BoxDetails?this.BoxDetails.id:this.id;
    this._dataService
    .getSingle<any>(id,Config.showPredefinedItemsOfBoxesUrl)
    .subscribe(
      data => {

        this.boxName=data.boxName;
        this.boxes=data.box;
        this.priceBox=data.price;
      },
      error => {
        console.log(error);

      });
  }
  ChooseBox(Box){
    this.choosedBoxes.push(Box);
    localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
    this.navCtrl.push("ConfirmOurPakagesPage");
  }

}
