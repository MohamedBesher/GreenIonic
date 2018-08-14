import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmOrderSubscriptionPage } from './confirm-order-subscription';

@NgModule({
  declarations: [
    ConfirmOrderSubscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmOrderSubscriptionPage),
  ],
})
export class ConfirmOrderSubscriptionPageModule {}
