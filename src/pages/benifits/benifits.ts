import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';

/**
 * Generated class for the BenifitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-benifits',
  templateUrl: 'benifits.html',
})
export class BenifitsPage {
  Information:Array<any>=[];
  page =1;
  pageSize=10;
  benifit_count:number;
  infiniteScroll:InfiniteScroll;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private _dataService: DataProvider, 
          public plt: Platform, 
    ) {
    this._dataService
    .getAllPaging<any>(Config.healthInformationUrl,this.page,this.pageSize)
    .subscribe(
      data => {
        this.benifit_count=data.count;
        this.Information=data.information;
       
      },
      error => {

      });
  }

ionViewDidEnter()
{
  this.plt.ready().then(() => {
    this.plt.registerBackButtonAction(() => this.myHandlerFunction());
  })
}

myHandlerFunction() {
  this.navCtrl.push("TabsPage");

}

  ionViewDidLoad() {
 
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll=infiniteScroll;
    this.page++;

    setTimeout(() => {
      this._dataService
      .getAllPaging<any>(Config.healthInformationUrl,this.page,this.pageSize)
      .subscribe(
        data => {
        
          data.information.forEach(element => {
              this.Information.push(element);
            });
        },
        error => {
          console.log(error);
  
        });
      console.log('Async operation has ended');
      infiniteScroll.complete();
      if (this.Information.length >=this.benifit_count) {
        infiniteScroll.enable(false);
      }
    }, 1000);
  }

}
