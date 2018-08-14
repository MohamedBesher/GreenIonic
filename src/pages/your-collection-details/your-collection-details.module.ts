import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourCollectionDetailsPage } from './your-collection-details';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    YourCollectionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(YourCollectionDetailsPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class YourCollectionDetailsPageModule {}
