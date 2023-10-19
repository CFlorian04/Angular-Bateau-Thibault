import { Injectable } from '@angular/core';
import { MainPageModel } from 'src/models/MainPage';

export enum Pages {
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

  BistrotdesGascons = 30,
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
          index: 5,
          name: 'Produit et Promotions',
          image : '../../assets/images/poisson.png'
        },
        {
          index: 2,
          name: 'Bateaux',
          image : '../../assets/images/ancre.png'
        },
        {
          index: 3,
          name: 'Restaurants',
          image : '../../assets/images/restaurant.png'
        },
        {
          index: 4,
          name: 'Recettes',
          image : '../../assets/images/recette.png'
        },
        {
          index: 1,
          name: 'Contact',
          image : '../../assets/images/tourteau.png'
        }
      ]
    },
    {
      index: 1,
      titre: 'Le Bateau de Thibault',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n ...',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/TIG.png'
        }
      ]
    },
    {
      index: 2,
      titre: 'Nos bateaux partenaires',
      description: 'Tous les eaux mènent à Thibault.',
      buttonArray : [
        {
          index: 20,
          name: 'De la brise',
          image : '../../assets/images/deLaBrise_icon.png'
        },
        {
          index: 21,
          name: 'Saphir',
          image : '../../assets/images/saphir_icon.png'
        },
        {
          index: 22,
          name: 'Gast Micher',
          image : '../../assets/images/gastMicher_icon.png'
        },
        {
          index: 23,
          name: 'Aquilon',
          image : '../../assets/images/aquilon_icon.png'
        },
        {
          index: 1,
          name: 'Contact',
          image : '../../assets/images/tourteau.png'
        },
        {
          index: 1,
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
