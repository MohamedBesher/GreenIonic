export class Config {
   //static apiUrl = "http://192.168.1.126:8000/";
   
    static apiUrl = "https://akdar.azurewebsites.net/";
    static photoURl=Config.apiUrl+"img/";
    static loginUrl = Config.apiUrl + "api/v2/login";
    static logoutUrl = Config.apiUrl + "api/v2/logout?token=";
    static registerUrl = Config.apiUrl + "api/v2/register";
    static forgetPasswordUrl = Config.apiUrl + "api/v2/getForgetPass";
    static confirmCodeUrl = Config.apiUrl + "api/v2/change_code";
    static resetPasswordUrl = Config.apiUrl + "api/v2/changeForgetPass";
    static registerConfirmCodeUrl = Config.apiUrl + "api/v2/verification_code";
    static editProfileUrl = Config.apiUrl + "api/v2/editProfile?token=";

    static ItemsSearch = Config.apiUrl + "/api/v2/allItems";

    static Subscription = Config.apiUrl + "api/v2/timeForSubscription";
    static OurCollection = Config.apiUrl + "api/v2/ourCollection";
    static MakeOrder = Config.apiUrl + "api/v2/timeForOrder";
    static google_api_key = "https://maps.googleapis.com/maps/api/geocode/json?latlng=latitude,longitude&key=AIzaSyBtFtgozwjRT_KY5AmzhvDmWfxer5T_UbU&language=defaultLanguage";

    static homeSliderUrl = Config.apiUrl + "api/v2/homeSlider";


    static contactUsUrl = Config.apiUrl + "api/v2/contactUs";
    static allImagesUrl = Config.apiUrl + "api/v2/allImages";
    static healthInformationUrl = Config.apiUrl + "api/v2/healthInformation";
    static orderUrl = Config.apiUrl + "api/v2/order";
    static instantOrderUrl = Config.apiUrl + "api/v2/instantOrder";
    static showPredefinedItemsOfBoxesUrl = Config.apiUrl + "api/v2/showPredefinedItemsOfBoxes";
    static showOrder = Config.apiUrl + "api/v2/showOrder";
    static cancelOrderUrl = Config.apiUrl + "api/v2/cancelOrder";

    static cancelSubscriptionUrl = Config.apiUrl + "api/v2/cancelSubscription";
    static appSettingUrl = Config.apiUrl + "api/v2/appSetting";
    static detailsOfOrderUrl = Config.apiUrl + "api/v2/detailsOfOrder";
    static availableCitiesUrl = Config.apiUrl + "api/v2/availableCities";






}

