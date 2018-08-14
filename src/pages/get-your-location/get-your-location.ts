import { Component, ViewChild,ChangeDetectorRef, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,Navbar} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  ILatLng
} from '@ionic-native/google-maps';
import { Config } from '../../providers/config';
import { TranslateService } from '@ngx-translate/core';
import { Item } from '../../providers/models/Dto';
import { orderType } from '../../providers/enums/orderType';
/**
 * Generated class for the GetYourLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-get-your-location',
  templateUrl: 'get-your-location.html',
})

export class GetYourLocationPage {

  @ViewChild('myTabs') tabRef: any;
  @ViewChild('mapCanvas') mapCanvas: any;
  @ViewChild(Navbar) navBar: Navbar;

  default_lang: string = "en";
  mapReady: boolean = false;
  map: GoogleMap;
  address: string = "";
  no_address: string = "";
  inital_Address: string = "";
  gps_message: string = "";
  map_not_ready_message: string = "";
  user_lat: string;
  user_lng: string;
  selected_Items: Array<Item> = [];
  orderType: orderType;
  cities: any;
  city: string;
  province: string;
  is_available: boolean;
  district: string;
  not_available_city_msg: any;
  constructor(
    public element: ElementRef,
    public navCtrl: NavController,
    public navParams: NavParams,
    public plt: Platform,
    private toastCtrl: ToastServiceProvider,
    private dataprovider: DataProvider,
    private translate: TranslateService,
    private ref:ChangeDetectorRef

  ) {

    
   

    
  }
  ionViewDidLoad() {
       this.get_strings();
      // setTimeout(()=>{    //<<<---    using ()=> syntax
       this.loadMap();
  
  //  }, 2000);

   this.navBar.backButtonClick = (e:UIEvent)=>{
    this.navCtrl.pop();
   }
  }

  
  ionViewDidEnter()
  {
    this.selected_Items =localStorage.getItem('selected_items') ? JSON.parse(localStorage.getItem('selected_items')): null;
    this.orderType = this.navParams.get('orderType');
    this.default_lang = this.plt.lang();
    console.log(this.plt.lang());
    this.load_available_cities();
     

  }

  ionViewDidLeave()
  {


  }
  



  payment() {
 
    if(!this.is_available)
       {
         this.toastCtrl.showToast(this.not_available_city_msg);
       return;
       }

    if (this.user_lat != "" && this.user_lng != "" && this.address != this.inital_Address && this.address != this.no_address)
     {
      localStorage.setItem("user_lat", this.user_lat);
      localStorage.setItem("user_lng", this.user_lng);
      localStorage.setItem("user_address", this.address);

      this.navCtrl.push("PaymentPage", {
        orderType:  this.orderType,
        selected_Items: this.selected_Items,
        user_lat: this.user_lat,
        user_lng: this.user_lng,
        user_address: this.address
      })
        .then((response) => {
          let index = 1;
          let ff=this.navCtrl.getPrevious().index;
          console.log("index"+ ff);
          this.navCtrl.remove(index);

          //this.navCtrl.pop();

          console.log(response);
          if (!response)
            {
              this.navCtrl.push("LoginPage");
            }
        }) // this logs
        .catch((error) => console.log('Access Denied! Error: ' + error)); // this doesn't

    }
    else {
      this.toastCtrl.showToast(this.gps_message);
    }

  }

  back()
  {
    
    //this.navCtrl.pop();
    this.navCtrl.push("TabsPage");
  }
  loadMap() {
    
    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {

      camera: {
        target: {
          lat: 24.713552,
          lng: 46.675296
        },
        zoom: 18,
        tilt: 30
      }
    });

    // Wait the maps plugin is ready until the MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.mapReady = true; 
      var w = this.map.getDiv().offsetWidth;
      var h = this.map.getDiv().offsetHeight;
      console.log("height" + h + "width"+w);

      this.get_your_location();

    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((params: any[])  =>
      {
        console.log("sdfasdadasd1");
         this.map.clear();         
            let latLng: ILatLng = params[0];
            this.map.addMarkerSync({
              "position": latLng
            });      
            this.Get_address_by_Lat_lng(latLng["lat"], latLng["lng"]);



            
      }
    );

   


  }
  onMapClick(params: any[]) {

    this.map.clear();

    let latLng: ILatLng = params[0];

    this.Get_address_by_Lat_lng(latLng["lat"], latLng["lng"]);
    //let map: GoogleMap = params[1];  // <-- You can get the target of MAP_CLICK event
    this.map.addMarker({
      position: latLng
    });   
  }


  onButtonClick() {




    try {
      if (!this.mapReady) {
        this.toastCtrl.showToast('map is not ready yet. Please try again.');
        return;
      }
      this.map.clear();
      this.get_your_location();
      // Code which can cause an exception.
    }
    catch (ex) {
      console.log(JSON.stringify(ex));
      // Code to handle exception
    }

  }

  

  get_your_location() {
    // Get the location of you
    this.map.clear();

    this.map.getMyLocation()
      .then((location: MyLocation) => {
        this.Get_address_by_Lat_lng(location.latLng["lat"], location.latLng["lng"]);
        // Move the map camera to the location with animation
        return this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        })
          .then(() => {
            this.map.clear();

            // add a marker
            return this.map.addMarker({
              // title: '@ionic-native/google-maps plugin!',
              // snippet: 'This plugin is awesome!',
              position: location.latLng,
              animation: GoogleMapsAnimation.BOUNCE,
              draggable: true,
            });
          })
      })
      .then((marker: Marker) => {
        marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe((params: any[]) => {
          let latLng: ILatLng = params[0];
          this.Get_address_by_Lat_lng(latLng["lat"], latLng["lng"]);
        });
      })
      .catch(e => {
        this.toastCtrl.showToast(this.gps_message);
      });

  }


  Get_address_by_Lat_lng(lat, lng) {

    this.user_lat = lat;
    this.user_lng = lng;
    this.call_google_api(this.default_lang);
    if(this.default_lang.toLowerCase()!="en")
    {
      this.call_google_api("en",false);
    }

    

  }


  private call_google_api(lang:string="",first:boolean=true) {

    let url = Config.google_api_key;
    url = url.replace("latitude", this.user_lat);
    url = url.replace("longitude", this.user_lng);
    this.default_lang=this.plt.lang();
    url = url.replace("defaultLanguage", lang);
   
   return this.dataprovider
      .getWithoutLang<any>(url)
      .subscribe(data => {
        let results = data.results;
        if (results.length == 0) {
          this.address = this.no_address;
        }
        else {
           if(first)
           {
            console.log(this);
            this.address = results[0]["formatted_address"];
            this.ref.detectChanges();
           }
       
          if(lang=="en")
          {
             this.district =typeof results[0]["address_components"][1]==='undefined' ? "":results[0]["address_components"][1]["short_name"];
          this.city = typeof results[0]["address_components"][2]==='undefined' ? "": results[0]["address_components"][2]["short_name"];
          this.province = typeof results[0]["address_components"][3]==='undefined' ? "": results[0]["address_components"][3]["short_name"];
          console.log(JSON.stringify(results[0]["formatted_address"])); 

//start


for (var ac = 0; ac < results[0].address_components.length; ac++) {
    
   var component = results[0].address_components[ac];
    
   if(component.types.includes('sublocality') || component.types.includes('locality')) {
    this.city = component.long_name;
   }
   else if (component.types.includes('administrative_area_level_1')) {
       this.province = component.short_name;
   }
   

};
console.log("city="+ this.city +"  Provicnce=" + this.province);







//end
           this.city_is_available();
          }
        }
      }, error => {
        this.address = this.no_address;
        console.log(error);
        this.toastCtrl.showToast(this.gps_message);
      });
  }

  get_strings() {
    this.translate.get(['getYourLocation-no-address',
      "getYourLocation-initial-address",
      'getYourLocation-gps',
      'getYourLocation-map-not-ready-message','getYourLocation-not-available'])
      .subscribe(value => {
        this.no_address = value["getYourLocation-no-address"];
        this.inital_Address = value["getYourLocation-initial-address"];
        this.gps_message = value["getYourLocation-gps"];
        this.map_not_ready_message = value["getYourLocation-map-not-ready-message"];
        this.not_available_city_msg = value["getYourLocation-not-available"];

        this.address = this.inital_Address;
      }
      )
  }

  city_is_available()
  {
    console.log("city_is_available");
  
    if(this.cities.length>0)
          {
            //this.district.toLowerCase().indexOf(x.locality.toLowerCase()) >= 0 ||
            let your_groups_exists = this.cities
            .filter(x => 
             this.city.toLowerCase().indexOf(x.locality.toLowerCase()) >= 0 &&  
             this.province.toLowerCase().indexOf(x.adminstrative_area_level.toLowerCase()) >= 0);
            if(your_groups_exists.length>0)
            {
            this.is_available=true; 
            return;
          }
          }
          this.toastCtrl.showToast(this.not_available_city_msg);
          this.is_available= false;
   

  

  }

  load_available_cities()
  {
    //debugger;
    this.dataprovider
    .getWithoutLang<any>(Config.availableCitiesUrl)
    .subscribe(
      data => {
        this.cities=data.city;
       
       
      },
      error => {
        this.cities=[];
        console.log(error);

      });
  
    
  }








}
