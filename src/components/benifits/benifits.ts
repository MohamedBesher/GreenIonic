import { Component, Input } from '@angular/core';
import { Config } from '../../providers/config';
/**
 * Generated class for the BenifitsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'benifits',
  templateUrl: 'benifits.html'
})
export class BenifitsComponent {

  
  @Input() singleinformation: any;
  photoUrl: string=Config.photoURl;
  constructor() {
  
  }

}
