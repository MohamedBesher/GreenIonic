import { Component, Input } from '@angular/core';
import { Config } from '../../providers/config';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent {

  @Input() singlePicture: any;
  photoUrl: string=Config.photoURl;
  constructor() {
  }

}
