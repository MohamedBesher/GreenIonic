import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  Albums:Array<any>=[];
  page =1;
  pageSize=10;
  picture_count:number;
 infiniteScroll:InfiniteScroll;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private _dataService: DataProvider,   
            public plt: Platform
    ) {
    this._dataService
    .getAllPaging<any>(Config.allImagesUrl,this.page,this.pageSize)
    .subscribe(
      data => {
        this.picture_count=data.count;
        this.Albums=data.images;
     
      },
      error => {
      

      });
  }

  ionViewDidLoad() {

    
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

  doInfinite(infiniteScroll) {
    this.infiniteScroll=infiniteScroll;
    this.page++;

    setTimeout(() => {
      this._dataService
      .getAllPaging<any>(Config.allImagesUrl,this.page,this.pageSize)
      .subscribe(
        data => {
        
          data.images.forEach(element => {
              this.Albums.push(element);
            });
        },
        error => {
          console.log(error);
  
        });
      infiniteScroll.complete();
      if (this.Albums.length >=this.picture_count) {
        infiniteScroll.enable(false);
      }
    }, 1000);
  }

}
