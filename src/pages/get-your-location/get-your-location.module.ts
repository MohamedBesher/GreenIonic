import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetYourLocationPage } from './get-your-location';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GetYourLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GetYourLocationPage),
    TranslateModule.forChild()

  ],
})
export class GetYourLocationPageModule {}
