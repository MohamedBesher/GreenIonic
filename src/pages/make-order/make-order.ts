import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
/**
 * Generated class for the MakeOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-order',
  templateUrl: 'make-order.html',
})
export class MakeOrderPage {
  DayDate:Array<any>= [];
  Time:Array<any>=[];
  Date:string;
  DateFormat:string;
  TimeId:number;
  Day:number;
  Month:number;
  Year:number;
  validationDate:string;
  validationTime:string;
  HideDate:boolean = false;
  HideTime:boolean = false; 
  collectionType:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _dataService:DataProvider,public platform:Platform) {
         
          this.collectionType=this.navParams.get('collectionType');
  }
  ngOnInit(): void {

 

 }
  ionViewDidLoad() {
    this._dataService
 .getAll<any>(Config.MakeOrder)
 .subscribe(
 data => {
    this.DayDate=data.date;	
   this.Time=data.delievery_time;
 
 }, 
 error => {
 console.log(error);

 });
  }

  

  checkDate(value)
  {
     this.Date=value.split(",")[1];
     this.Day=parseInt(this.Date.split("-")[0]);
     this.Month=parseInt(this.Date.split("-")[1]);
     this.Year=parseInt(this.Date.split("-")[2]);
    this.DateFormat= (this.Year+"-"+this.Month+"-"+this.Day).toString();
    this.HideDate=false;
  }
  checkTime(Time_id){
    this.TimeId=Time_id;
    this.HideTime=false;
  }

  Products(){
    if(this.DateFormat==undefined)
    
      this.HideDate = true;
    
    else
       this.HideDate =false;
       
    if( this.TimeId==undefined)

      this.HideTime = true;
    
    else
      this.HideTime =false;

    if(this.DateFormat!=undefined&&this.TimeId!=undefined){
      this.HideDate = false;
      this.HideTime = false;
      localStorage.setItem("joinData",JSON.stringify({
        date:this.DateFormat,//التارخ
        period:this.TimeId//2-4pm
      }));
      
      if(this.collectionType==1)
      this.navCtrl.push("OurCollectionsPage");
     else if (this.collectionType==2)
       this.navCtrl.push("CreateYourCollectionsPage");   
           
    }
  }
}
