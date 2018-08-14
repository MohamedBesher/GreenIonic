import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmCodePage } from './confirm-code';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmCodePage),
    TranslateModule.forChild()
  ],
})
export class ConfirmCodePageModule {}
