export class ShopInfo {
    name :string;
    num :number = 1;
    price : number;
    image : string;
  
    constructor(name : string, num : number, price: number, image: string) {
        this.name = name;
        this.num = num;
        this.price = price;
        this.image = image
    }
  }