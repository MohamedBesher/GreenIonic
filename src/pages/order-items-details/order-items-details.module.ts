import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderItemsDetailsPage } from './order-items-details';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    OrderItemsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderItemsDetailsPage), ComponentsModule, TranslateModule.forChild()
  ],
})
export class OrderItemsDetailsPageModule { }
