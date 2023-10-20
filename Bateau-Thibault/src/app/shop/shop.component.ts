import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ShopInfo } from 'src/models/ShopInfo';
import { CustomButton } from 'src/models/customButton';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})

export class ShopComponent  implements OnInit {

  @Input() panierList!: CustomButton[];

  realPanierList : ShopInfo[] = [];

  constructor() { }

  ngOnInit() {
    for (const element of this.panierList) {
      for (let j = 0; j < this.realPanierList.length; j++)
      {
        if (this.realPanierList[j].name == element.name)
        {
          this.realPanierList[j].num++;
        }
        else if (j == this.realPanierList.length)
        {
          this.realPanierList.push({ name: element.name, 
            num: 1,
            price: element.index,
            image: element.image});
          //this.realPanierList = [...this.realPanierList];
          console.log("add element");
        }
      }
    }
    console.log(this.realPanierList);
    console.log(this.panierList);
  }

}
