import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BenifitsPage } from './benifits';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BenifitsPage,
  ],
  imports: [
    IonicPageModule.forChild(BenifitsPage), 
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class BenifitsPageModule {}
