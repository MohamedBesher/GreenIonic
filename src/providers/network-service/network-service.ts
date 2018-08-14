import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Network } from '@ionic-native/network';

/*
  Generated class for the NetworkServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkService {
  private appOnline: boolean = true;

  constructor(private network: Network) {
      console.log('In NetworkService->constructor().');
  }

  isAppOnline(): boolean {
      return this.appOnline;
  }

  onConnect(): Observable<void>  {
      return this.network.onConnect().map(() => {
          this.appOnline = true;
      });

      //return this.network.onConnect(); <= If I just have this, it works but then I cannot set the 'appOnline' variable.
  }

  onDisconnect(): Observable<void>  {
     return this.network.onDisconnect().map(() => {
          this.appOnline = false;
      });
      
      //return this.network.onDisconnect(); <= If I just have this, it works but then I cannot set the 'appOnline' variable.
  }
}
