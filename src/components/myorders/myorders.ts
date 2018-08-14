import { Component, Input, SimpleChanges } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Config } from '../../providers/config';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the MyordersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'myorders',
  templateUrl: 'myorders.html'
})
export class MyordersComponent {
 
  @Input() singleOrder:any;
  @Input() indexType:any;

  hideDeliverytime:boolean=true;
  type:string;
  status:string;
  statusNo:number;
  photoUrl: string=Config.photoURl;
  constructor(public navCtrl: NavController,private translate: TranslateService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['indexType']) {
      this.type=this.indexType;
      if(this.type=='Conveyance'||this.type=='توصيل فوري')
      this.hideDeliverytime=false;
    }

    if (changes['singleOrder']) {
      this.statusNo=this.singleOrder.status;
      if(this.statusNo==0)
      this.translate.get('MyOrder-StatusC').subscribe(
        value => {
  
          this.status = value;
        }
      )

      if(this.statusNo==2)
      this.translate.get('MyOrder-StatuD').subscribe(
        value => {
       
          this.status = value;
        }
      )
    }
  }
   OrderDetails(Item){
 
   this.navCtrl.push("OrderDetailsPage",{"OrderDetails":Item});
  }

}
