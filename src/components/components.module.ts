import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ItemComponent } from './item/item';
import { OurCollectionComponent } from './our-collection/our-collection';
import { ConfirmOurPakagesComponent } from './confirm-our-pakages/confirm-our-pakages';
import { CartoonDetailsComponent } from './cartoon-details/cartoon-details';
import { GalleryComponent } from './gallery/gallery';
import { BenifitsComponent } from './benifits/benifits';
import { MyordersComponent } from './myorders/myorders';
import { OrderItemsDetailsComponent } from './order-items-details/order-items-details';
import { NetworkNotAvailableComponent } from './network-not-available/network-not-available';
@NgModule({
	declarations: [
		ProductComponent,
		ItemComponent,
		OurCollectionComponent,
		ConfirmOurPakagesComponent,
		CartoonDetailsComponent,
		GalleryComponent,
		BenifitsComponent,
		MyordersComponent,
		OrderItemsDetailsComponent,
    NetworkNotAvailableComponent,

	],
	imports: [IonicModule,
		TranslateModule.forChild(),
	],
	exports: [
		ProductComponent,
		ItemComponent,
		OurCollectionComponent,
		ConfirmOurPakagesComponent,
		CartoonDetailsComponent,
		GalleryComponent,
		BenifitsComponent,
		MyordersComponent,OrderItemsDetailsComponent,
        NetworkNotAvailableComponent

	]
})
export class ComponentsModule { }
