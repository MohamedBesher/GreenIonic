// this file only included Seach Model in Project
//plz Don't include any view-Model Class 

export class SearchViewModel {
    pageSize: number;
    page: number;
    search_item: string;
    lang:string;
    constructor(pageSize: number, page: number, search_item: string,lang:string="ar")
    {
        this.pageSize = pageSize;
        this.page = page;
        this.search_item = search_item;
        this.lang=lang;
    }

}
export class country {
    id: number;
    name: string;
  
}

export class grade {
    id: number;
    name: string;
  
}

export class ItemSearchModel extends SearchViewModel
{ 
    types_id: number; //how all items if 1 => show fruits if 2=> show vegetables if 3 => show papers
    delivery_status: number; //1 deliverable 1 not deliverable
    constructor(size: number, page: number, search_item: string, lang:string="ar",types_id:number=4,delivery_status:number=2)
    {
        super(size,page,search_item,lang);
        this.types_id=types_id;
        this.delivery_status=delivery_status;

    } 
}

