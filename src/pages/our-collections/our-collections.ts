import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
/**
 * Generated class for the OurCollectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-our-collections',
  templateUrl: 'our-collections.html',
})
export class OurCollectionsPage  {

  All_boxes: Array<any> = [];
  BoxFilter: Array<any> = [];
  choosedBoxes: Array<any> = [];
  HideMsg:boolean=false;

  sizecheckedsix: boolean = true;
  sizecheckednine: boolean = true;
  sizecheckedtwelve: boolean = true;

  typecheckedFruit: boolean = true;
  typecheckedVeg: boolean = true;
  typecheckedVegFruit: boolean = true;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, private _dataService: DataProvider) {
  
  }

  ionViewDidLoad() {
 
    
  }
  ionViewDidEnter(){
    this.choosedBoxes=localStorage.getItem("choosedBoxes")?JSON.parse(localStorage.getItem("choosedBoxes")):[];
    this.getCollectionBoxes();
  }

 

  getCollectionBoxes(): any {
    this._dataService
      .getAll<any>(Config.OurCollection)
      .subscribe(
        data => {
          if (data.all_boxes.length > 0) {
            this.All_boxes = data.all_boxes.filter(box=>this.choosedBoxes.findIndex(a => a.id==box.id)==-1);
            this.BoxFilter =this.All_boxes;

            if(this.BoxFilter.length==0)
              this.HideMsg=true;
            
            else
              this.HideMsg=false;
            
          }
        },
        error => {
          console.log(error);

        });

  }

  filter() {
    this.BoxFilter = this.All_boxes.filter(box => ((box['type']==1&& this.typecheckedFruit==true)||(box['type']==2&&this.typecheckedVeg==true)||(box['type']==3&&this.typecheckedVegFruit==true)) && ((box['size']==6&&this.sizecheckedsix==true)||(box['size']==9&&this.sizecheckednine==true)||(box['size']==12&&this.sizecheckedtwelve==true)));
    if(this.BoxFilter.length==0){
      this.HideMsg=true;
    }
    else{
      this.HideMsg=false;
    }
  

  }
}


