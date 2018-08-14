
// export class User{
// 	Email:string="administrator";
// 	Password:string="Pa$$w0rd";
// }
export class loginViewModel {

    phone_number: string;
    password: string;
    deviceId: string;
    name="";
    email: string="";

    constructor(phone_number = "",
     Password = "",
      deviceId = "095df89c-9c0c-1ba0-3352-836062990560"
      //deviceId = ""

    ) {
        this.phone_number = phone_number;
        this.password = Password;
        this.deviceId = deviceId;


    }
}
export class registerViewModel {


    phone_number: string;
    name: string;
    password: string;
    password_confirmation: string;
   
   
    constructor(
        phone_number = "",
        name = "",
        password = "",
        password_confirmation = ""
       ) {
        this.phone_number = phone_number;
        this.name = name;
        this.password = password;
        this.password_confirmation = password_confirmation;
        


    }

}
export class ConfirmregisterViewModel {

    name: string;
    phone_number: string;
    password: string;
    deviceId: string;
    token:string
   
    constructor(
      token="",
      deviceId=""
       ) {
        let user=JSON.parse(localStorage.getItem('RegisterUser'));  
        this.phone_number = user['phone_number'];
        this.name = user['name'];
        this.password = user['password'];
        this.deviceId = deviceId;
        this.token=token;
      


    }

}
export class ForgotPasswordViewModel {
    phone_number: string;
    constructor(phone_number = "") {
        this.phone_number = phone_number;
    }
}

export class ResetPasswordViewModel {
    phone_number: string;
    password: string;
    password_confirmation: string;
    code: string;
    constructor(
        password = "",
        password_confirmation = "",
    ) {
        this.phone_number = localStorage.getItem("phone_number");
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.code = localStorage.getItem("code");


    }
}
export class ConfirmCodeViewModel {

    phone_number: string;
    code: string;


    constructor(code = "") {
        this.phone_number = localStorage.getItem("phone_number");
        this.code = code;


    }
}

export class ContactModel {


    name="";
    email: string="";
    message:string="";

    constructor(name = "",
    email = "",
    message = ""
    ) {
        this.name = name;
        this.email = email;
        this.message = message;


    }
}

export class MyOrder {

    lang="";
    type:number;
    page:number;
    pageSize:number;
  
    constructor(lang: string='',type: number=0,page:number,pageSize:number)
     {
        this.lang = lang;
        this.type = type;
        this.page=page;
        this.pageSize=pageSize;
    }
}