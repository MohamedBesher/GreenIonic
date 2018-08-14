import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetworkErrorPage } from './network-error';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NetworkErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(NetworkErrorPage),
    ComponentsModule,
  ],
})
export class NetworkErrorPageModule {}
