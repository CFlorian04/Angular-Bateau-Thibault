import { Component } from '@angular/core';
import { MainPageModel } from 'src/models/MainPage';
import { CustomButton } from 'src/models/customButton';
import { MainPageService } from '../main-page.service';

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
    this.MainPage = this.mainPageS.getMainPage()
    
    this.isEven = this.MainPage.buttonArray.length%2 == 0
    
  }


}
