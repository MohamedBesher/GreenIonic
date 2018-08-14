import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

   headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',"Access-Control-Allow-Origin":"*"});

   //  ,'NeedAuthentication':''

  
   token :string;
   lang :string;

  constructor(public http: HttpClient) {
  
    this.token=localStorage.getItem("currentUser")?localStorage.getItem("currentUser"):'';
    this.set_lang();
  }
  private set_lang() {
    this.lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : 'en';
  }

  public getAll<T>(url: string): Observable<T> {
    this.set_lang();
   let service=this.http.get<T>(url+"/"+this.lang,{ headers:this.headers });
    return service.map(res =>
       res);
  } 

  public getAllPaging<T>(url: string,page:number,pageSize:number): Observable<T> {
    this.set_lang();

    let service=this.http.get<T>(url+"/"+this.lang+"/"+page+"/"+pageSize,{ headers:this.headers });
     return service.map(res =>
        res);
   } 

  public getAllWithoutLang<T>(url: string): Observable<T> {
    var service=this.http.get<T>(url,{ headers:this.headers });

    return service.map(res =>
       res);
  }

  public getAlltoken<T>(url: string): Observable<T> {
    this.set_lang();

    var service=this.http.get<T>(url+"/"+this.lang+"?token="+this.token,{ headers:this.headers });
    return service.map(res =>
       res);
  } 

  public get<T>(url: string): Observable<T> {
    this.set_lang();

    var service=this.http.get<T>(url+"/"+this.lang);
  
    return service.map(res =>
       res);
  } 

  public getWithoutLang<T>(url: string): Observable<T> {
    var service=this.http.get<T>(url);
  
    return service.map(res =>
       res);
  } 
  public getToken<T>(url: string): Observable<T> {
    this.set_lang();

    var service=this.http.get<T>(url+"/"+this.lang+"?token="+this.token);
  
    return service.map(res =>
       res);
  } 

  
  public All<T>(obj: any, url: string): Observable<T> {
 
    let search = JSON.stringify(obj);
    var service= this.http.post<T>(url+"/"+this.lang, search,{ headers:this.headers });
    return service.map(res =>
      res);
  }
  public AllToken<T>(obj: any, url: string): Observable<T> {
 
    let search = JSON.stringify(obj);
    var service= this.http.post<T>( url+"?token="+this.token, search,{ headers:this.headers });
    return service.map(res =>
      res);
  }
  
  public getSingle<T>(id: number, url: string): Observable<T> {
    this.set_lang();
    return this.http.get<T>(url +"/" + id+"/"+this.lang,{ headers:this.headers });
  }

  public getSingleToken<T>(id: number, url: string): Observable<T> {
    this.set_lang();
    return this.http.get<T>(url +"/" + id+"/"+this.lang+"?token="+this.token,{ headers:this.headers });
  }
  
public add<T>(item: any, url: string): Observable<T> {
    const toAdd = JSON.stringify(item);
    return this.http.post<T>(url, toAdd,{ headers:this.headers });
}

public addWithToken<T>(item: any, url: string): Observable<T> {
  const toAdd = JSON.stringify(item);
  return this.http.post<T>(`${url}?token=${this.token}`, toAdd,{ headers:this.headers });
}


public update<T>(id: number, itemToUpdate: any, url: string): Observable<T> {
    return this.http
        .put<T>(url+"/" + id, JSON.stringify(itemToUpdate),{ headers:this.headers });
}

public cancel<T>(id: number, url: string): Observable<T> {
  return this.http.post<T>(url +"/"+id +"?token="+this.token,{ headers:this.headers });
}

public delete<T>(id: number, url: string): Observable<T> {
    return this.http.delete<T>(url + "/" + id,{ headers:this.headers });
}




}
