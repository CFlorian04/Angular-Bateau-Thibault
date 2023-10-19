import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomButton } from 'src/models/customButton';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent  implements OnInit {

  @Input() menuButton!: CustomButton;

  //@Input() setMainPage!: () => void;
  
  @Output("setMainPage") setMainPage: EventEmitter<any> = new EventEmitter(); 

  constructor() {}

  ngOnInit() {}

  setFunction() {
    this.setMainPage.emit("");
  }
  

}
