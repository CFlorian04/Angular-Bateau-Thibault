import { Component } from '@angular/core';
import { MainPageModel } from 'src/models/MainPage';
import { MainPageService } from '../main-page.service';
import { Pages } from '../main-page.service';
import { Gesture } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  MainPage! : MainPageModel;

  isEven! : boolean;

  private swipeCoord!: [number, number];
  private swipeTime!: number;

  constructor(private mainPageS :MainPageService) {
  }

  ngOnInit() {
    console.log(this.mainPageS);

    this.setMainPage(Pages.Accueil)
  }

  setMainPage(index :number) {
    if(Object.values(Pages).includes(index)) {
      this.MainPage = this.mainPageS.getMainPage(index)

      //console.log(this.MainPage);
      //console.log(index);
      this.isEven = this.MainPage.buttonArray.length%2 == 0
    }
    else
    console.log('index is not defined');
  }

  isMenuPage(index :number) {
    return (index == 0 || index == 2 || index == 3 || index == 4)
  }

  isContactOrMenu(index :number) {
    return (index >= 0 && index <= 4)
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
  
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
  
      if (duration < 1000 && direction[0] > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { 
          //const swipe = direction[0] < 0 ? 'next' : 'previous';
          // Do whatever you want with swipe

          //console.log(direction[0] < 0 ? 'next' : 'previous');

          this.setMainPage(this.MainPage.index/10 >= 0 ? Math.trunc(this.MainPage.index/10) : 0)

      }
    }
  }

}
