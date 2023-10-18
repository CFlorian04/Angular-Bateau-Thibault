import { Injectable } from '@angular/core';
import { MainPageModel } from 'src/models/MainPage';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  PageAccueil :MainPageModel = 
    {
      titre: 'Le Bateau de Thibault',
      description: 'Vente en direct de notre bateau \n Produit selon la saison, Livraisons sur Paris',
      buttonArray : [
        {
          name: 'Produit et Promotions',
          image : '../../assets/images/poisson.png',
          page: ''
        },
        {
          name: 'Bateaux',
          image : '../../assets/images/ancre.png',
          page: ''
        },
        {
          name: 'Restaurants',
          image : '../../assets/images/restaurant.png',
          page: ''
        },
        {
          name: 'Recettes',
          image : '../../assets/images/recette.png',
          page: ''
        },
        {
          name: 'Contact',
          image : '../../assets/images/tourteau.png',
          page: '/contact'
        }
      ]
    }

  constructor() { }

  
  getMainPage( ) {
    return this.PageAccueil;
  }
}
