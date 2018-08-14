import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
import { subscriptionData } from '../../providers/models/Dto';

/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {
  SubData: subscriptionData = new subscriptionData();
  HideDayfortnightly: boolean = false;
  HideDayOnce: boolean = false;
  HideDayTwice: boolean = false

  Durations: Array<any> = [];

  TimeId: number;
  DurationId: number;
  DayId: Array<any> = [];
  TypeID: string;

  HideType: boolean = false;
  HideDay: boolean = false;
  HideTime: boolean = false;
  HideDuration: boolean = false;

  filterDayfortnightly: number = 0;
  filterDayOnce: number = 0;
  filterDaySecond: number = 0;
  filterDay: number = 0;

  hideWeek: boolean = true;
  hideTwoWeek: boolean = true
  SameDayValidation: boolean = false;
  //1 our collection ,2 create your collection
  collectionType: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataService: DataProvider) {

    this.collectionType = this.navParams.get('collectionType');

  }
  ionViewDidEnter() {
    localStorage.removeItem("joinData");
  }
  ngOnInit(): void {

    this._dataService
      .getAll<any>(Config.Subscription)
      .subscribe(
        data => {
          this.Durations = data.specifictimes;
        },
        error => {
          console.log(error);

        });

  }
  ionViewDidLoad() {
  }

  checkTime(Time_id) {
    this.TimeId = Time_id;
    this.HideTime = false;
    this.SubData.period = this.TimeId;
  }

  onChange() {
    this.HideDuration = false;

  }
  checkSub_type() {

    this.HideType = false;
    this.filterDayfortnightly = 0;
    this.filterDayOnce = 0;
    this.filterDaySecond = 0;
    this.filterDay = 0;
    this.TypeID = this.SubData.type_join;
    this.SubData.time = "";
    if (this.TypeID == "1") {
      this.HideDayOnce = true;
      this.HideDayTwice = false;
      this.HideDayfortnightly = false;
      this.DayId = [];
      this.hideWeek = false;
      this.hideTwoWeek = true;
    }
    if (this.TypeID == "2") {
      this.HideDayTwice = true;
      this.HideDayOnce = false;
      this.HideDayfortnightly = false;
      this.DayId = [];
      this.hideWeek = true;
      this.hideTwoWeek = true;
    }
    if (this.TypeID == "3") {
      this.HideDayfortnightly = true;
      this.HideDayTwice = false;
      this.HideDayOnce = false;
      this.DayId = [];
      this.hideWeek = false;
      this.hideTwoWeek = false;
    }

  }
  Dayfilter(filterDay) {
    this.HideDay = false;
    if (this.TypeID == "2" && this.filterDaySecond == this.filterDay) {
      this.SameDayValidation = true;

    }
    else {
      this.SameDayValidation = false;
      this.DayId.push({ "id": parseInt(filterDay) });
    }
    this.SubData.day = this.DayId;
  }

  OurCollections() {
    if (this.TypeID == "")

      this.HideType = true;

    else
      this.HideType = false;

    if (this.DayId.length == 0 && this.TypeID != "2")

      this.HideDay = true;
    else if (this.DayId.length <= 1 && this.TypeID == "2")

      this.HideDay = true;

    else
      this.HideDay = false;

    if (this.SubData.period == 0)

      this.HideTime = true;

    else
      this.HideTime = false;
    if (this.SubData.time == "")

      this.HideDuration = true;

    else
      this.HideDuration = false;
    if (((this.TypeID != "2" && this.DayId.length > 0) || this.TypeID == "2" && this.DayId.length == 2) && this.SubData.period != undefined && this.SubData.time != "") {
      this.HideType = false;
      this.HideDay = false;
      this.HideDuration = false;
      this.HideTime = false;

      localStorage.setItem("joinData", JSON.stringify({
        type_join: parseInt(this.SubData.type_join),//مرتين في الاسبوع
        day: this.SubData.day,//الايام
        time: parseInt(this.SubData.time),//اسبوع اسبوعين
        period: this.SubData.period//4-6pm

      }))
      // localStorage.setItem("joinData",JSON.stringify(this.SubData));

      if (this.collectionType == 1)
        this.navCtrl.push("OurCollectionsPage");
      else if (this.collectionType == 2)
        this.navCtrl.push("CreateYourCollectionsPage");


    }
  }
}
