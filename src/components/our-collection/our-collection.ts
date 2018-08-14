import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Config } from '../../providers/config';
/**
 * Generated class for the OurCollectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'our-collection',
  templateUrl: 'our-collection.html'
})
export class OurCollectionComponent {


  @Input() singleCollection: any;
  photoUrl: string = Config.photoURl;
  choosedBoxes: Array<any> = [];
  typeCollection:string;
  constructor(public navCtrl: NavController) {
    this.choosedBoxes=localStorage.getItem("choosedBoxes")?JSON.parse(localStorage.getItem("choosedBoxes")):[];

  }
  // ngOnChanges(changes: SimpleChanges) {
  // }
  choosePackage(box) {

    this.choosedBoxes.push(box);
    localStorage.setItem("choosedBoxes", JSON.stringify(this.choosedBoxes));
    this.navCtrl.push("ConfirmOurPakagesPage");

  }
  BoxDetails(box){

    this.navCtrl.push("CartoonDetailsPage",{"BoxDetails":box});
  }
}
