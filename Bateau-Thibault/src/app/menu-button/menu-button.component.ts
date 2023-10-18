import { Component, Input, OnInit, Output } from '@angular/core';
import { CustomButton } from 'src/models/customButton';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent  implements OnInit {

  @Input() menuButton!: CustomButton;

  constructor() {}

  ngOnInit() {}

}
