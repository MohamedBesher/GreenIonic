
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Config } from '../../providers/config';


@Component({
  selector: 'confirm-our-pakages',
  templateUrl: 'confirm-our-pakages.html'
})
export class ConfirmOurPakagesComponent {

  counter: number = 1;
  @Input() box: any;
  @Output() removeBox=new EventEmitter();
  @Output() increase=new EventEmitter();
  @Output() decrease=new EventEmitter();
  @Output() Details=new EventEmitter();
  photoUrl: string = Config.photoURl;
 
    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['box']) {
        this.counter=this.box.counter;
      }
    }
    add(id,total){
      this.counter++;
      let price=(total/(this.counter-1));
      this.box.total += price;
      this.increase.emit({price:price,counter:this.counter,id:id}); 
    }
    remove(id,total){
      if(this.counter==1)
      {
        this.counter = 0;
        this.removeBox.emit({price:total,id:id}); 
      }
      else
      {
        this.counter--;
        let price=(total/(this.counter+1));
        this.box.total-=price;
        this.decrease.emit({price:price,id:id,counter:this.counter}); 
      }
    }
    removeItem(id,price){ 
      this.removeBox.emit({id:id,price:price}); 
    }
  BoxDetails(id){

    this.Details.emit({id:id});
  }

}
