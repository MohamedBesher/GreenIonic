import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeOrderPage } from './make-order';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    MakeOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeOrderPage),
    TranslateModule.forChild()
  ],
})
export class MakeOrderPageModule {}
