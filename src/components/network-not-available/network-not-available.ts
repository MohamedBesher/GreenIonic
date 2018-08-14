import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the NetworkNotAvailableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'network-not-available',
  templateUrl: 'network-not-available.html'
})
export class NetworkNotAvailableComponent {

  @Output() ReloadPage=new EventEmitter();

  constructor() {
   // console.log('Hello NetworkNotAvailableComponent Component');
  }

  reload()
  {
    this.ReloadPage.emit();      
  }



}
