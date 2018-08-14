import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMyCollectionPage } from './add-my-collection';

@NgModule({
  declarations: [
    AddMyCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMyCollectionPage),
  ],
})
export class AddMyCollectionPageModule {}
