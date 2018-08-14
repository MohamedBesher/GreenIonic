import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubscriptionPage } from './subscription';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    SubscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(SubscriptionPage), TranslateModule.forChild()
  ],
})
export class SubscriptionPageModule {}
