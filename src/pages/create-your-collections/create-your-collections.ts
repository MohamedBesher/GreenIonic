import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, LoadingController, Keyboard } from 'ionic-angular';
import { Config } from '../../providers/config';
import { DataProvider } from '../../providers/data/data';
import { Item } from '../../providers/models/Dto';
import { ItemSearchModel } from '../../providers/models/SearchViewModel';

/**
 * Generated class for the CreateYourCollectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-your-collections',
  templateUrl: 'create-your-collections.html',
})
export class CreateYourCollectionsPage {
  infiniteScroll:InfiniteScroll;
  all_Items: Array<Item> = [];
  selected_Items: Array<Item> = [];
  selected_Items_total:any=0;
  items_count:number=0;
  search_term: string = "";
  types_id="";
  loading :any;
  search:ItemSearchModel=new ItemSearchModel(10,1,"","ar",0,2);
  show_loading: boolean;
  min_price: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dataprovider: DataProvider,
    public loadingCtrl: LoadingController,
    private keyboard: Keyboard) {
      this.get_min_price();

  }

  ionViewDidLoad() {
  }
  ionViewWillEnter()
  {
 
    this.loading = this.loadingCtrl.create({});      
    this.loading.present();  
    
    let select_items_navs=localStorage.getItem('selected_items') ? JSON.parse(localStorage.getItem('selected_items')): null;
    if (select_items_navs != null) {
      this.selected_Items=select_items_navs;
      
    }
    else{
      this.selected_Items=[]
    }
    this.calculate_Total();
    this.Load_Items();
  }

  onInput($event) {
    // if(this.search.search_item=="")
    // {
      this.Load_Items();
    // }
  }
  onSearch(){
    (this.infiniteScroll)?this.infiniteScroll.enable(true):'';
    this.Load_Items(0);
    this.keyboard.close();
  }
  onCancel($event)
  {
    this.search.search_item="";
    this.Load_Items();
  }

  get_min_price()
  {
  let min_price=localStorage.getItem("order_min_price");
  if (min_price!=null)
   this.min_price=Number(min_price);
  else 
   this.min_price=25;
  }

Load_Items(type_id :number=0) {
  this.search.page=1;
  this.search.types_id=type_id;
  this.search.delivery_status=2;
  this.types_id=type_id.toString();
  this.show_loading=false;
  this.all_Items=[];
  this.items_count=0;
  let url=Config.ItemsSearch;
  this.dataprovider
    .All<any>(this.search,url)
    .subscribe(
      data => {
        this.show_loading=true;

        if(data!==null && typeof data !== 'undefined')
        {
        this.items_count=data.total_count;
        this.all_Items =   this.map_data(data.items);  
        }
        else{
         this.items_count=0;
         this.all_Items = [];   
        } 
        this.loading.dismiss();
       
      },
      error => {
        console.log(error);

      });
  
    

}
show_Details(id) {
  this.navCtrl.push("ProductDetailsPage", {
    id: id
   
  });

}
map_data(arr:any)
{
  return arr.map(o => {
    let select_count=0;
    let item_Exist=this.item_Not_selected(o.id);
    if(item_Exist.length>0)
    {
      select_count=item_Exist[0]["count"];
    }
    return new Item(o.id,o.name,o.price,o.image,o.kilo_unit,o.delivery_status,o.deliever_price,o.deliever_priceAfterDiscount,select_count,o.count) ;
  })
  
}

change_Kilo_count($event)
{
let item_Exist=this.item_Not_selected($event.id);
// item is already added and need to change kilo count
if(item_Exist.length>0)
{

  if($event.Kilo_count==0)
  {
   this.selected_Items= this.selected_Items.filter(
      item => item.id !== $event.id);
  }
  else
  {
    let select_Item = this.selected_Items.filter(
    item => item.id === $event.id);
    select_Item[0]["count"]=$event.Kilo_count;

  }
  

}
else
{
  if($event.Kilo_count>0)
{
let select_Item = this.all_Items.filter(
    item => item.id === $event.id);
    select_Item[0]["count"]=$event.Kilo_count;
   this.selected_Items.push(select_Item[0]);
  }
}
this.calculate_Total();    

}



item_Not_selected(id)
{
  let Item = this.selected_Items.filter(
    item => item.id === id);

    return Item;
}

calculate_Total()
{
  if (this.selected_Items.length>0)
  {
    let arr:any=this.selected_Items.map(x => x.count * x.price);
    let sum : number = arr.reduce((sum, current) => sum + current);
    this.selected_Items_total=sum;
  }
  else
  {
    this.selected_Items_total=0;

  }  
}
doInfinite(infiniteScroll) {
  let url=Config.ItemsSearch;
  this.infiniteScroll=infiniteScroll;
  this.search.page++;
  setTimeout(() => {
    this.dataprovider
      .All<any>(this.search, url)
      .subscribe(
        data => {
          data.items.forEach(o => {
            let select_count=0;
            let item_Exist=this.item_Not_selected(o.id);
            if(item_Exist.length>0)
            {
              select_count=item_Exist[0]["count"];
            }
            this.all_Items.push(
             new Item(o.id,o.name,o.price,o.image,o.kilo_unit,o.delivery_status,o.deliever_price,o.deliever_priceAfterDiscount,select_count,o.count) 
              );
          });


        },
        error => {
          console.log(error);

        });

    infiniteScroll.complete();
    if (this.all_Items.length >=this.items_count) {
      infiniteScroll.enable(false);
    }
  }, 1000);
}

confirm()
{
  let paramObj = { selected_items: this.selected_Items };
  localStorage.setItem("selected_items",JSON.stringify(this.selected_Items));
  this.navCtrl.push("ConfirmOurPakagesPage", paramObj); 

}
cancel()
{
  this.navCtrl.push("TabsPage"); 

}
  makeOrder() {
    this.navCtrl.push("MakeOrderPage");
  }
  makeOrder2(){
    this.navCtrl.push("MakeOrderPage");
  }
}
