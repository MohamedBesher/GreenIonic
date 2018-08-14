import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkService } from '../../providers/network-service/network-service';

/**
 * Generated class for the NetworkErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-network-error',
  templateUrl: 'network-error.html',
})
export class NetworkErrorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  
     private netService: NetworkService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkErrorPage');
  }


  ReloadData()
  {     
    console.log("error");
    if (this.netService.isAppOnline())
    {
    this.navCtrl.pop();
    }
    }
   

}
