import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ShopInfo } from 'src/models/ShopInfo';
import { CustomButton } from 'src/models/customButton';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})

export class ShopComponent  implements OnInit {

  isAlertOpen : Boolean = false;
  public alertButtons = ['OK'];

  @Input() panierList!: CustomButton[];

  realPanierList : ShopInfo[] = [];

  constructor() { }

  ngOnInit() {
    for (const element of this.panierList) {
      console.log(element);
      if (this.realPanierList.length == 0) {
        this.realPanierList.push({ name: element.name, 
          num: 1,
          price: element.index,
          image: element.image});
      }

      for (let j = 0; j < this.realPanierList.length; j++)
      {
        if (this.realPanierList[j].name == element.name)
        {
          this.realPanierList[j].num++;
        }
        else if ((j+1) == this.realPanierList.length)
        {
          this.realPanierList.push({ name: element.name, 
            num: 1,
            price: element.index,
            image: element.image});
        }
      }
    }
    console.log(this.realPanierList);
  }

  getTotal() {
    let total: number = 0;

    for (const element of this.realPanierList)
    {
      total += element.num * element.price;
    }
    return total;
  }

  setOpen(state : Boolean) {
    this.isAlertOpen = state;
  }
}