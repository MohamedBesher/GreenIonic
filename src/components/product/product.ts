import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Config } from '../../providers/config';


/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {
 
  counter: number = 0;
@Input() id: number;
@Input() name: string="";
@Input()  price: number;
@Input() image: string="";
@Input()  deliever_priceAfterDiscount: number;
@Input() kilo_unit: number;
@Input() count: number;

@Input() delivery_status: number;
@Input()  deliever_price: number;
@Input()  selected_value: number;
@Input() order_type:number=1
@Output() change_Kilo_count=new EventEmitter();

  photoUrl: string=Config.photoURl;
  imageNameProduct:string;

  constructor() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['selected_value']) {
      this.counter=this.selected_value;
    }
  }

  add(id){
    this.counter=this.counter+this.get_plus();
    this.change_Kilo_count.emit({	Kilo_count:	this.counter,id:id});      
  }

  get_plus(): number {
   if(this.kilo_unit==1)
     return .5 ;
   else 
     return 1;
  }


  remove(id){
    if(this.counter== 0){
      this.counter = 0;
    }
    else{
      this.counter=this.counter-this.get_plus();
    }

    this.change_Kilo_count.emit({	Kilo_count:	this.counter,id:id});      


  }
}
