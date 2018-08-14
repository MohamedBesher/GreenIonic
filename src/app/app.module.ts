import{ HttpClientModule , HttpClient } from '@angular/common/http';
import {  } from '@ionic-native/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { DataProvider } from '../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';
import {GoogleMaps} from '@ionic-native/google-maps';
import { OneSignal } from '@ionic-native/onesignal';
import{ TranslateModule , TranslateLoader } from '@ngx-translate/core';
import{ TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Device } from '@ionic-native/device';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { NetworkService } from '../providers/network-service/network-service';
import { Network } from '../../node_modules/@ionic-native/network';
import { testNativeHttpProvider } from '../providers/authentication/testNativeHttp';
// step-2
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpClientModule,
    cordovaHTTP,
    BrowserModule,
    IonicModule.forRoot(MyApp,{mode: 'md'}),
 
  TranslateModule.forRoot({
    loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
    }

    }
  ),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    testNativeHttpProvider,
    Geolocation,
    GoogleMaps,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    DataProvider,
    Device,
    Network,
    SocialSharing,
    ToastServiceProvider,
    NetworkService
  ]
})
export class AppModule {}
