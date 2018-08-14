import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, App, Platform, ModalController, Navbar } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Config } from '../../providers/config';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';


import { PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  ImageArray: any = [];
  photoUrl: string = Config.photoURl;
  tabBarElement: any;
  instant_delivery_available: any;
  Home_conveyance_not_available: any;
  dir: string;
  show_loading: boolean;
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _dataService: DataProvider,
    private socialSharing: SocialSharing,
    private toastCtrl: ToastServiceProvider,
    private translate: TranslateService,
    public appCtrl: App,
    public plt: Platform,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    



  ) {
    this.dir = plt.dir() //setting slider dir to app dir

  }
  @ViewChild(Slides) slides: Slides;

  ionViewDidEnter() {
    
      this.start_page();
    
  }
  
 
  start_page() {
    this.load_slider();
    this.get_strings();
    this.GetAppSetting();
  }
  ionViewDidLoad() {
   // this.navBar.backButtonClick = (e:UIEvent)=>{
    //   this.plt.exitApp();
    //  }
    //this.start_page();
  }
  load_slider(): any {


    let albums = (localStorage.getItem("albums")!=="undefined") ? JSON.parse(localStorage.getItem("albums")) : null;
    if (albums != null) {
      this.ImageArray = albums;
    }
    else {
      this._dataService
        .getAllWithoutLang<any>(Config.homeSliderUrl)
        .subscribe(
          data => {
            this.ImageArray = data['albums'];
            localStorage.setItem("albums", JSON.stringify(this.ImageArray));

          },
          error => {
            console.log(error);

          });
    }

  }
  ChoicePage() {
    //reset choosed box for new item
    localStorage.removeItem("choosedBoxes");
    localStorage.removeItem("selected_items");
    localStorage.removeItem("joinData");
    this.appCtrl.getRootNav().setRoot("SelectCollectionPage", { id: 1 });
  }
  subscrip() {
    //reset choosed box for new item
    localStorage.removeItem("choosedBoxes");
    localStorage.removeItem("selected_items");
    localStorage.removeItem("joinData");
    this.appCtrl.getRootNav().setRoot("SelectCollectionPage", { id: 2 });


  }

  gotoDelivery() {
     localStorage.removeItem("selected_items");
    this.appCtrl.getRootNav().setRoot("SelectItemsDeliveryPage");

  }
  deliveryNotAvailable() {
    this.toastCtrl.showToast(this.Home_conveyance_not_available);
  }

  delivery(isAvailable) {
    if (isAvailable == 1)
      this.gotoDelivery();
    else
      this.deliveryNotAvailable();
  }
  shareLink() {
    this.socialSharing.share('Message and link', null, null, "http://onelink.to/bkqgmq");
  }
  start() {
    this.slides.startAutoplay();
  }

  GetAppSetting(): any {
    this._dataService
      .getAll<any>(Config.appSettingUrl)
      .subscribe(
        data => {
          //available delivery
          this.instant_delivery_available = data.available[0].available;
          localStorage.setItem("instant_delivery_available", this.instant_delivery_available);
          //this.instant_delivery_available=0;
          // min_price حد ادنى للتوصيل
          localStorage.setItem("order_min_price", data.min_price[0].min_price);
          //tax الضريبة
          localStorage.setItem("tax", data.setting[0].price);
          //Delivery fee سعر التوصيل العادى
          localStorage.setItem("delivery_fee", data.setting[1].price);
          //Instant delivery fee سعر التوصبيل الفورى
          localStorage.setItem("instant_delivery_fee", data.setting[2].price);

        },
        error => {
          console.log(error);

        });
  }
  get_strings() {
    this.translate.get(['Home-conveyance-not-available']
    )
      .subscribe(value => {
        this.Home_conveyance_not_available = value['Home-conveyance-not-available'];
      }
      )
  }
  openModal() {
    const popover = this.popoverCtrl.create('PopupPage');
    popover.present();
  }
}
