import { Component, Input, OnInit } from '@angular/core';
import { last, map } from 'rxjs';
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
  date : string = new Date().toISOString();
  minDate: any = new Date().toISOString();
  lastClicked : string = '';
  
  restaurantList : string[] = [
    'Bistrot des Gascons',
    'Les Fous de l\'Ile',
    'Bistrot Landais',
    'Villa 9-Trois',
    'Bistrot du Sommelier'
  ]
  public alertButtons = [
    {
      text: 'Non',
      role: 'cancel',
      handler: () => {
        console.log('Achat annulé');
      },
    },
    {
      text: 'Oui',
      role: 'confirm',
      handler: () => {
        console.log('Achat confirmé');
      },
    },
  ];

  public actionSheetButtons = [
    {
      text: '0',       
      handler: () => {
        this.realPanierList = this.realPanierList.filter(item => item.name != this.lastClicked);
        //this.realPanierList.find(item => item.name == this.lastClicked)!.num = 0;
        /*this.panierList = this.panierList.reverse();
        while (this.panierList.findIndex((item) => item.name == this.lastClicked) != -1)
        {
          this.panierList = this.panierList.slice(this.panierList.findIndex((item) => item.name == this.lastClicked), 1);
          console.log(this.panierList);
          console.log(this.lastClicked);
        }
        this.panierList = this.panierList.reverse();
        this.setRealPanier();*/
      }  
    },
    {
      text: '1',     
      handler: () => {
        this.realPanierList.find(item => item.name == this.lastClicked)!.num = 1;
        /*this.panierList = this.panierList.reverse();
        let index : number = 0;
        for (const elem of this.panierList)
        {
          if (elem.name == this.lastClicked)
            index++;
        }
        if (index < 1)
        {
          while (index < 1)
          {
            //this.panierList.slice(this.panierList.findIndex((item) => item.name == this.lastClicked));
            let item : CustomButton;
            item = this.panierList.find((element) => element.name == this.lastClicked)!;
            this.panierList.push({ name: item.name,
              index: item.index,
              image: item.image});
            index++;
          }
        }
        else if (index > 1)
        {
          while (index > 1)
          {
            this.panierList = this.panierList.slice(this.panierList.findIndex((item) => item.name == this.lastClicked));
            index--;
          }
        }
        this.panierList = this.panierList.reverse();
        this.setRealPanier();*/
      }  
    },
    {
      text: '2',     
      handler: () => {
        this.realPanierList.find(item => item.name == this.lastClicked)!.num = 2;
        /*this.panierList = this.panierList.reverse();
        let index : number = 0;
        for (const elem of this.panierList)
        {
          if (elem.name == this.lastClicked)
            index++;
        }
        if (index < 2)
        {
          while (index < 2)
          {
            //this.panierList.slice(this.panierList.findIndex((item) => item.name == this.lastClicked));
            let item : CustomButton;
            item = this.panierList.find((element) => element.name == this.lastClicked)!;
            this.panierList.push({ name: item.name,
              index: item.index,
              image: item.image});
            index++;
          }
        }
        else if (index > 2)
        {
          while (index > 2)
          {
            this.panierList = this.panierList.slice(this.panierList.findIndex((item) => item.name == this.lastClicked));
            index--;
          }
        }
        this.panierList = this.panierList.reverse();
        this.setRealPanier();*/
      }  
    },
    {
      text: '3',     
      handler: () => { 
        this.realPanierList.find(item => item.name == this.lastClicked)!.num = 3;
      }  
    },
    {
      text: '4',     
      handler: () => { 
        this.realPanierList.find(item => item.name == this.lastClicked)!.num = 4;
      }  
    },
    {
      text: '5',     
      handler: () => { 
        this.realPanierList.find(item => item.name == this.lastClicked)!.num = 5;
      }  
    },
    {
      text: 'Ajouter 1',     
      handler: () => { 
        this.realPanierList.find(item => item.name == this.lastClicked)!.num++;
      }  
    },
    {
      text: 'Enlever 1',     
      handler: () => { 
        if (this.realPanierList.find(item => item.name == this.lastClicked)!.num == 1)
          this.realPanierList = this.realPanierList.filter(item => item.name != this.lastClicked);
        else
          this.realPanierList.find(item => item.name == this.lastClicked)!.num--;
      }  
    }
  ];

  @Input() panierList!: CustomButton[];

  realPanierList : ShopInfo[] = [];

  constructor() { }

  ngOnInit() {
    this.setRealPanier();
  }

  setRealPanier() {
    this.realPanierList = [];
    for (const element of this.panierList) {
      console.log(element);

      for (let j = 0; j < this.realPanierList.length; j++)
      {
        if (this.realPanierList[j].name == element.name)
        {
          this.realPanierList[j].num++;
        }
        else if ((j + 1) == this.realPanierList.length)
        {
          this.realPanierList.push({ name: element.name, 
            num: 1,
            price: element.index,
            image: element.image});
          break;
        }
      }

      if (this.realPanierList.length == 0) {
          this.realPanierList.push({ name: element.name, 
          num: 1,
          price: element.index,
          image: element.image});
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

  onClick(item: string) {
    this.lastClicked = item;
  }
}