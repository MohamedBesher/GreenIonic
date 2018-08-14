import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisteConfirmCodePage } from './registe-confirm-code';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisteConfirmCodePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisteConfirmCodePage),
    TranslateModule.forChild()
  ],
})
export class RegisteConfirmCodePageModule {}
