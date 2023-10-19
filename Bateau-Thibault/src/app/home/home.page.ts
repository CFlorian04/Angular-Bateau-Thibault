import { Component } from '@angular/core';
import { MainPageModel } from 'src/models/MainPage';
import { CustomButton } from 'src/models/customButton';
import { MainPageService } from '../main-page.service';
import { Pages } from '../main-page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  MainPage! : MainPageModel;

  isEven! : boolean;
  

  constructor(private mainPageS :MainPageService) {
  }

  ngOnInit() {
    this.setMainPage(Pages.Accueil)
    console.log(this.mainPageS);
  }

  setMainPage(index :number) {
    if(Object.values(Pages).includes(index)) {
      this.MainPage = this.mainPageS.getMainPage(index)

      console.log(this.MainPage);
      console.log(index);
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


}
