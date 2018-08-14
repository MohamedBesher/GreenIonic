import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurCollectionsPage } from './our-collections';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OurCollectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(OurCollectionsPage),
    ComponentsModule,TranslateModule.forChild()
  ],
})
export class OurCollectionsPageModule {}




