import { Component } from '@angular/core';
import { CustomButton } from 'src/models/customButton';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ProduitetPromotions: CustomButton = new CustomButton("Produit et Promotions", "../../assets/images/poisson.png");
  Bateaux: CustomButton = new CustomButton("Bateaux", "../../assets/images/ancre.png");
  Restaurant: CustomButton = new CustomButton("Restaurant", "../../assets/images/restaurant.png");
  Recettes: CustomButton = new CustomButton("Recettes", "../../assets/images/recette.png");
  Contact: CustomButton = new CustomButton("Contact", "../../assets/images/tourteau.png");

  constructor() {}

}
