import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCollectionPage } from './select-collection';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelectCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCollectionPage),  
    TranslateModule.forChild()
  ],
})
export class SelectCollectionPageModule {}
