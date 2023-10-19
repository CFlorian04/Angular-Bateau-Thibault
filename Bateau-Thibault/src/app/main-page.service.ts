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
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
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
    },
    {
      index: 3,
      titre: 'Nos restaurants partenaires',
      description: 'Tous les restaurants partenaires avec le bateau de Thibault.',
      buttonArray : [
        {
          index: 30,
          name: 'Bistrot des Gascons',
          image : ''
        },
        {
          index: 31,
          name: 'Les Fous de l\'Ile',
          image : ''
        },
        {
          index: 32,
          name: 'Bistrot Landais',
          image : ''
        },
        {
          index: 33,
          name: 'Villa 9-Trois',
          image : ''
        },
        {
          index: 34,
          name: 'Bistrot du Sommelier',
          image : ''
        },
        {
          index: -1,
          name: 'Devenez Partenaire!',
          image : ''
        }
      ]
    },
    {
      index: 4,
      titre: 'Nos recettes',
      description: 'Tous les recettes du bateau de Thibault.',
      buttonArray : [
        {
          index: 40,
          name: 'Homard',
          image : '../../assets/images/homardRecette_icon.png'
        },
        {
          index: 41,
          name: 'St-Jacques',
          image : '../../assets/images/saintJacques_icon.png'
        },
        {
          index: 42,
          name: 'Bar',
          image : '../../assets/images/barRecette_icon.png'
        },
        {
          index: 43,
          name: 'Tourteau',
          image : '../../assets/images/poulpe.png'
        },
        {
          index: 44,
          name: 'Recette',
          image : '../../assets/images/poulpe.png'
        },
        {
          index: 44,
          name: 'Recette',
          image : '../../assets/images/poulpe.png'
        }
      ]
    },
    {
      index: 20,
      titre: 'De la Brise',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/deLaBrise.png'
        }
      ]
    },
    {
      index: 21,
      titre: 'Saphir',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/saphir.png'
        }
      ]
    },
    {
      index: 22,
      titre: 'Gast Micher',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/gastMicher.png'
        }
      ]
    },
    {
      index: 23,
      titre: 'Aquilon',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/aquilon.png'
        }
      ]
    },
    {
      index: 30,
      titre: 'Bistrot des Gascons',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/desGascons.png'
        }
      ]
    },
    {
      index: 31,
      titre: 'Les fous de l\'ile',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/fousDeLIle.png'
        }
      ]
    },
    {
      index: 32,
      titre: 'Bistrot Landais',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/bistrotLandais.png'
        }
      ]
    },
    {
      index: 33,
      titre: 'Villa 9-Trois',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/villa9Trois.png'
        }
      ]
    },
    {
      index: 34,
      titre: 'Bistrot du Sommelier',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/duSommelier.png'
        }
      ]
    },
    {
      index: 40,
      titre: 'Homard en chaud-froid',
      description: 'Faites cuire les homards dans de l\'eau bouillante avec du thym, du laurier, du sel et du poivre de Cayenne/n. Laissez cuire 20 minutes. Égouttez-les et laissez-les refroidir.\n\nDécoupez les coffres des homards dans le sens de la longueur.\n\nMélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée.',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/homardRecette.png'
        }
      ]
    },
    {
      index: 41,
      titre: 'Noix de Saint-Jacques flambées au cognac',
      description: 'Faire fondre du beurre avec des échalotes puis ajouter les noix de Saint-Jacques. Les faire revenir en faisant le milieu translucide puis les retirer du feu.\n\nAjouter l\'ail et le persil dans la poële et laisser cuire quelques secondes. Bien faire chauffer la poële, puis flamber au Cognac. Une fois la flamme éteinte, ajouter les noix de Saint-Jacques (il faut pas flamber car elles perdraient leur saveur).\n\nDéfuster chaud ou accompagné d\'une fondue de poireaux',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/saintJacques_icon.png'
        }
      ]
    },
    {
      index: 42,
      titre: 'Bar rôti au laurier frais',
      description: 'Sur une plaque ou un plat allant au four, disposer quelques feuilles de laurier frais, verser un filet d\'huile d\'olive et du gros sel. Disposer le bar, puis l\'arroser d\'un filet d\'huile d\'olive et mettre un peu de gros sel sur la peau.\n\nCuire au fou pendant 12 min à 240°C.',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/homardRecette.png'
        }
      ]
    },
    {
      index: 43,
      titre: 'Tourteau linguine',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/poulpe.png'
        }
      ]
    },
    {
      index: 44,
      titre: 'Recette XYZ',
      description: 'Qu\'il est chaud le soleil \n Quand nous sommes en vacances \n Y a d\'la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n \n Que du bonheur! \n Que du bonheur!',
      buttonArray : [
        {
          index: -1,
          name: '',
          image : '../../assets/images/poulpe.png'
        }
      ]
    }
  ];

  constructor() { }

  
  getMainPage(index :number) {

    return this.ListePage.filter((int) => int.index == index )[0];
  }
}
