import { Component, Input } from '@angular/core';
import { Config } from '../../providers/config';
/**
 * Generated class for the OrderItemsDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-items-details',
  templateUrl: 'order-items-details.html'
})
export class OrderItemsDetailsComponent {
  @Input() detailsItems: any;
  photoUrl: string = Config.photoURl;

  constructor() {

  }

}
