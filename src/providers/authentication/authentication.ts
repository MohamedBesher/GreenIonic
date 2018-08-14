import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { loginViewModel, registerViewModel, ForgotPasswordViewModel, ResetPasswordViewModel } from '../models/user';
import { Config } from '../config';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
 // headers:HttpHeaders;
 headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',"Access-Control-Allow-Origin":"*"});

  constructor(public http: HttpClient)  { 
 
  }
  login(userInfo:loginViewModel){
    
  
      return this.http.post(Config.loginUrl,
          userInfo,{ headers:this.headers })   
        
          .map((res) => {  

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
          });


  }
  register(registerUser:registerViewModel){
    return this.http.post(Config.registerUrl,
        JSON.stringify(registerUser),{ headers:this.headers })   
        .map((response: Response) => {  
            localStorage.setItem('RegisterUser', JSON.stringify(registerUser));       

            return response;
        });

   }
   forgetPassword(forgetPasswordModel:ForgotPasswordViewModel)
   {
        return this.http.post(Config.forgetPasswordUrl,
            JSON.stringify(forgetPasswordModel),{ headers:this.headers })   
            .map((response: Response) => {         

                return response;
        });
   }
    sendConfirmCode(code){
        return this.http.post(Config.confirmCodeUrl,code,{ headers:this.headers })   
            .map((response: Response) => {         

                return response;
        });
        
    }

    sendRegisterConfirmCode(user){
        return this.http.post(Config.registerConfirmCodeUrl,user,{ headers:this.headers })   
            .map((response: Response) => {         
                let user = response;
  
                if (user && user['data']) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', user['data'].token);
                    //to use in refresh token
                    localStorage.setItem('userInfo',  JSON.stringify(user));
                }
                return user;
            });
                
      

    }
    resetPassword(ResetPasswordViewModel:ResetPasswordViewModel)
   {
        return this.http.post(Config.resetPasswordUrl,
            JSON.stringify(ResetPasswordViewModel),{ headers:this.headers })   
            .map((response: Response) => {         

                return response;
        });
   }

   editProfile(userInfo:loginViewModel){
    
    var token = localStorage.getItem('currentUser');
  
      return this.http.post(Config.editProfileUrl+token,JSON.stringify(userInfo),{ headers:this.headers })   
        
          .map((res) => {          
              return res;
          });


  }

    getAuthToken()
    {
        return  localStorage.getItem('currentUser');
          
    }
    isLoggedIn()
    {
        let user = localStorage.getItem('userInfo');
        if (user !== null)
           return true;
        else 
           return false;
    }



logout() {
  // remove user from local storage to log user out
  var token =localStorage.getItem('currentUser');
  return this.http.get(Config.logoutUrl+token,
  { headers:this.headers })   
    .map((response: Response) => {         

        return response;
});
 

}

}
