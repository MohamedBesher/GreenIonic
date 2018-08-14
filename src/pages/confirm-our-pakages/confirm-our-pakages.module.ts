import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmOurPakagesPage } from './confirm-our-pakages';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmOurPakagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmOurPakagesPage),
    ComponentsModule,
    TranslateModule.forChild()
  ],
})
export class ConfirmOurPakagesPageModule {}
