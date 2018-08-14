export class Box {
    description: string;
    id: number;
    image: string;
    name: string;
    size: number;
    total: number;
    type: number;
  
    counter: number = 1;
    constructor(box: any) {
      this.id = box.id;
      this.name = box.name;
      this.description = box.description;
      this.image = box.image;
      this.size = box.size;
      this.total = box.total;
      this.type = box.type;
      this.counter = box.counter === undefined ? 1 : box.counter;
  
    }
  }
  