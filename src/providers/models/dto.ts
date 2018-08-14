// this file only included Data Transefer Model in Project
//plz Don't include any other Model Class 

export class Item  {
    id: number;
    name: string;
    price: number;
    image: string;
    kilo_unit: number;
    count: number;

    delivery_status: number;
    deliever_price: number;
    deliever_priceAfterDiscount: number;
    selected_value: number;

    constructor(id: number, name: string,price: number, image: string,kilo_unit:number,
         delivery_status: number, deliever_price: number,deliever_priceAfterDiscount: number,
         selected_value:number=0,count:number=0)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image=image;
        this.kilo_unit=kilo_unit;
        this.delivery_status=delivery_status;
        this.deliever_price=deliever_price;
        this.deliever_priceAfterDiscount=deliever_priceAfterDiscount;
        this.selected_value=selected_value;
        this.count=count;
    }

   
}

export class itemViewModel{
    id: number;
    count: number;
    constructor(id: number, count: number)
  {
     this.id = id;
     this.count = count;
     
   }
  }


  export class boxesViewModel{
    id: number;
    amount: number;
    constructor(id: number, amount: number)
  {
     this.id = id;
     this.amount = amount;
     
   }
  }


  export class subscriptionData {

    type_join:string; //مرتين في الاسبوع
    day:Array<any> ; //الايام
    time: string; //اسبوع اسبوعين
    period: number; //4-6pm
  
    constructor(type_join: string="",day:Array<any> = [], time:string="" ,period:number=0)
     {
        this.type_join=type_join;
        this.day=day;
        this.time=time;
        this.period=period;
        
    }
}
 