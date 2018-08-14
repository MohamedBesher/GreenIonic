import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyOrdersSubscriptionDeliverPage } from './my-orders-subscription-deliver';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyOrdersSubscriptionDeliverPage,
  ],
  imports: [
    IonicPageModule.forChild(MyOrdersSubscriptionDeliverPage),   
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class MyOrdersSubscriptionDeliverPageModule {}
