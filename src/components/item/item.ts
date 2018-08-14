import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Item } from '../../providers/models/Dto';
import { Config } from '../../providers/config';

/**
 * Generated class for the ItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  counter: number = 0;
  @Input() item: Item;
  @Input() order_type:number=1

  @Input() selected_value: number;
  @Output() change_Kilo_count = new EventEmitter();
  @Output() remove_from_list = new EventEmitter();

  photoUrl: string = Config.photoURl;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected_value']) {
      this.counter = this.selected_value;
    }
  }

  add(id) {
    this.counter=this.counter+this.get_plus();
    this.change_Kilo_count.emit({ Kilo_count: this.counter, id: id });
  }


  get_plus(): number {
    if(this.item.kilo_unit==1)
      return .5 ;
    else 
      return 1;
   }

  remove(id) {
    if (this.counter == 0) {
      this.counter = 0;
    } 
    else {
      this.counter=this.counter-this.get_plus();
    }

    this.change_Kilo_count.emit({ Kilo_count: this.counter, id: id });


  }


  remove_list(id) {
    if (id != 0) {
      this.remove_from_list.emit({ Kilo_count: this.counter, id: id });

    }
  }


}
