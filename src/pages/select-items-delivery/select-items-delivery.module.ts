import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectItemsDeliveryPage } from './select-items-delivery';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelectItemsDeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectItemsDeliveryPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class SelectItemsDeliveryPageModule {}
