import { Payment_Method, periods, durations } from "../enums/paymentMethod";
import { itemViewModel, boxesViewModel } from "./Dto";

export class InstantOrder {
    payment_method: Payment_Method;
    lang: string;
    lat: string;
    address: string;
    "box-items": itemViewModel[];
    constructor(payment_method: Payment_Method, lang: string, lat: string, address: string, items: itemViewModel[]) {
        this.payment_method = payment_method;
        this.lang = lang;
        this.lat = lat;
        this.address = address;
        this["box-items"] = items;

    }
}


export class Order {
    payment_method: Payment_Method;
    lang: string;
    lat: string;
    specifictimes_id: number;
    date:string;
    periods_id: periods;
    durations_id: durations;
    day: Array<any>;
    address: string;
    "box-items": itemViewModel[];
    all_boxes_id: boxesViewModel[];
    constructor(
        payment_method: Payment_Method,
        lang: string,
        lat: string,
        specifictimes_id: number,
        periods_id: periods,
        durations_id: durations,
        address: string,
        items: itemViewModel[], all_boxes_id: boxesViewModel[],
        date?:string,
        days?: Array<any>) {
        this.payment_method = payment_method;
        this.lang = lang;
        this.lat = lat;
        this.specifictimes_id = specifictimes_id;
        this.date=date
        this.periods_id = periods_id;
        this.durations_id = durations_id;
        this.day = days;
        this.address = address;
        this["box-items"] = items;
        this.all_boxes_id=all_boxes_id;

    }
}


