import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmDeliveryPage } from './confirm-delivery';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmDeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmDeliveryPage),
    TranslateModule.forChild(),
    ComponentsModule

  ],
})
export class ConfirmDeliveryPageModule {}
