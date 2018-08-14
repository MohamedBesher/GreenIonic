import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '../../node_modules/@ionic-native/onesignal';
import { NetworkService } from '../providers/network-service/network-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  callOneSignal(): any {
    ////////////one signal
  this.oneSignal.startInit('47a74da5-379b-4c04-9f9d-7481711166ae', 'greenionic');

  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });
    
    this.oneSignal.endInit();
    
   
    this.oneSignal.getIds().then(identity => {
     // console.log("device  Token  "+identity.pushToken ); 
      //console.log("userId  "+identity.userId );
    });
   //////////////one signal
  }
  rootPage: any;
  network_available: boolean;

  @ViewChild(Nav) nav: Nav;
  constructor(private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private translate: TranslateService,
    public  oneSignal: OneSignal,
    private netService: NetworkService) {
    platform.ready().then(() => {

      this.check_network();
    //  console.log("app component"+ this.netService.isAppOnline());
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // translate.setDefaultLang('en');
     

      let lang = localStorage.getItem('lang');
      if (lang !== null) {
        (lang == "en") ? this.useEn() : this.useAr();
        let user = localStorage.getItem('userInfo');
        if (user !== null)
          this.rootPage = "TabsPage";
        else
          this.rootPage = "LoginPage";
  
      }
      else {
        this.rootPage = "ChooseLanguagePage";
  
      }

      platform.resume.subscribe ( (e) => {
        console.trace("resume called"); 
      });
      
      // platform.pause.subscribe ( (e) => {
      //   debugger;
      //   console.trace("pause called"); 
      //   if(this.nav.getActive().id=="GetYourLocationPage")
      //   { 
      //     console.trace("GetYourLocationPage pop"); 

      //     this.nav.pop();
      //   }
      // });
        

     // this.callOneSignal();
    });
 
  }

  
check_network()
{
  this.netService.onConnect().subscribe(
    () => {
      this.network_available=true;
      if(this.nav.getActive()){
        //console.log("page"+ this.nav.getActive().id);
        if(this.nav.getActive().id=="NetworkErrorPage")
        { 
          this.nav.popTo(this.nav.getByIndex(this.nav.length()-2));
        }
       
      // console.log("Network connected");
      }
     
      
    }, 
    (error) => {
        console.error('error is: ' + JSON.stringify(error));
    }
);

this.netService.onDisconnect().subscribe(
  () => {
    this.network_available=false;
    this.nav.push("NetworkErrorPage");

  }, 
  (error) => {
      console.error('error is: ' + JSON.stringify(error));
  }
);
}



  useAr() {
    this.platform.setDir('rtl', true);
    this.platform.setLang('ar', true);
    this.translate.use('ar');
  


  }
  useEn() {

    this.platform.setDir('ltr', true);
    this.platform.setLang('en', true);
    this.translate.use('en');
   

  }

  
}

