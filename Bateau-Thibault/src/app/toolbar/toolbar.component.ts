import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {
  
  @Output("returnFunc") returnFunc: EventEmitter<any> = new EventEmitter(); 
  @Output("shopFunc") shopFunc: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {}
}
