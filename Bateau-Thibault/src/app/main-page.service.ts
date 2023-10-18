import { Injectable } from '@angular/core';
import { MainPageModel } from 'src/models/MainPage';

enum Pages {
  Accueil = 0,
  Contact = 1,
  Bateaux = 2,
  Restaurants = 3,
  Recettes = 4,
  Produits = 5,

  DeLaBrise = 20,
  Saphir = 21,
  GastMicher = 22,
  Aquillon = 23,

  BristotdesGascons = 30,
  LesFousDeLIle = 31,
  BistrotLandais = 32,
  Villa9Trois = 33,
  BistrotDuSommelier = 34,

  HomardEnChaudFroid = 40,
  NoixDeSaintJacques = 41,
  BarRoti = 42,
  TourteauLinguine = 43,
  RecetteXYZ = 44

};

@Injectable({
  providedIn: 'root'
})

export class MainPageService {



  ListePage :MainPageModel[] = 
  [
    {
      index: 0,
      titre: 'Le Bateau de Thibault',
      description: 'Vente en direct de notre bateau \n Produit selon la saison, Livraisons sur Paris',
      buttonArray : [
        {
          index: 0,
          name: 'Produit et Promotions',
          image : '../../assets/images/poisson.png'
          
        },
        {
          index: 0,
          name: 'Bateaux',
          image : '../../assets/images/ancre.png'
        },
        {
          index: 0,
          name: 'Restaurants',
          image : '../../assets/images/restaurant.png'
        },
        {
          index: 0,
          name: 'Recettes',
          image : '../../assets/images/recette.png'
        },
        {
          index: 0,
          name: 'Contact',
          image : '../../assets/images/tourteau.png'
        }
      ]
    }
  ];

  constructor() { }

  
  getMainPage(index :number) {
    return this.ListePage[index];
  }
}
