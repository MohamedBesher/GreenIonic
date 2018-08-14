import { Component, Input, SimpleChanges } from '@angular/core';
import { Config } from '../../providers/config';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the CartoonDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cartoon-details',
  templateUrl: 'cartoon-details.html'
})
export class CartoonDetailsComponent {

  @Input() detailsCartoon: any;
  photoUrl: string = Config.photoURl;
  kiloUnit:number;
  typeUnit:string;
  constructor(private translate: TranslateService) {
  
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['detailsCartoon']) {
      //console.log(this.detailsCartoon);
      this.kiloUnit=this.detailsCartoon.kilo_unit;
     // console.log(this.kiloUnit);
      if(this.kiloUnit==0)//unit
      this.translate.get('order-items-details-Unit').subscribe(
        value => {
          this.typeUnit = value;
        }
      )

      else if(this.kiloUnit==1)//kilo
      this.translate.get('CartoonDetails-kilo').subscribe(
        value => {
          this.typeUnit = value;
        }
      )




    }
  }

}
