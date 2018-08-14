import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateYourCollectionsPage } from './create-your-collections';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CreateYourCollectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateYourCollectionsPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class CreateYourCollectionsPageModule {}
