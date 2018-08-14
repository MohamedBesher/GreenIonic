import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  ordertype: number=3;
  tab1Root = "HomePage";
  tab2Root = "BenifitsPage";
  tab3Root = "GalleryPage";
  tab4Root = "MyOrdersSubscriptionDeliverPage";
  tab5Root = "MyProfilePage";
 visitor =true;
  user=JSON.parse( localStorage.getItem("userInfo"));
  selectedIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
       public platform: Platform,

  ) {
    let selectedRoot=navParams.data.selectedRoot;
     this.ordertype = navParams.get('orderType');
   

    if(this.user )
    {
      if (typeof selectedRoot!='undefined')
          this.selectedIndex=selectedRoot;
     else
          this.selectedIndex=2;
    }
    else{
      this.selectedIndex=0;
    }




  }


  ionViewDidEnter()
  {
//    
    //  this.platform.registerBackButtonAction(() => {
    //   if(this.selectedIndex==0)
    //  {
    //         this.platform.exitApp();
    //       }
    //       else 
    //       {
    //         this.selectedIndex=0;
    //       }
    //   });
//}
  }

  ionViewDidLoad() {
   
  }



}
