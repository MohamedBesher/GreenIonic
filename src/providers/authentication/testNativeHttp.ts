import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';
import { loginViewModel } from '../models/user';
import { Config } from '../config';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class testNativeHttpProvider {
 // headers:HttpHeaders;
 headers = {'Content-Type':'application/json; charset=utf-8',"Access-Control-Allow-Origin":"*"};

  constructor(private http: HTTP)  { 
 
  }
  login(userInfo:loginViewModel){
    
  
      return this.http.post(Config.loginUrl,
          userInfo,{ headers:this.headers })   
        
          .then((res) => {  

              let user = res;

              if (user && user['data']) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', user['data'].token);
                  //to use in refresh token
                  userInfo.name=user['name'];
                  userInfo.email=user['email'];
                  localStorage.setItem('userInfo',  JSON.stringify(userInfo));
              }
              return res;
          }).catch(error => {

            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        
          });


  }


}
