export class  Authorized_Pages{

    static pages: string[] = [
        "PaymentPage",
        "EditProfilePage",
        "EditMyCollectionPage",
        "MyOrdersSubscriptionDeliverPage",
     ];

     static Check_Page_Need_Authorization(page:string) {
         console.log("Check_Page_Need_Authorization  "+JSON.stringify(this.pages),page);

console.log(this.pages.some(e=>e.toLowerCase()==page.toLowerCase()));

        return this.pages.some(e=>e.toLowerCase()==page.toLowerCase());
    }
}