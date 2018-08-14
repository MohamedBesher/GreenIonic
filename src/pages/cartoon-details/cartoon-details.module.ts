import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartoonDetailsPage } from './cartoon-details';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CartoonDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CartoonDetailsPage),
    ComponentsModule,TranslateModule.forChild()
  ],
})
export class CartoonDetailsPageModule {}
