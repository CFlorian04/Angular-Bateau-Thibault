import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BackgroundComponent } from 'src/components/background/background.component';
import { LinksComponent } from 'src/components/links/links.component';
import { PoesieComponent } from 'src/components/poesie/poesie.component';
import { ToolbarComponent } from 'src/components/toolbar/toolbar.component';


@NgModule({
  declarations: [BackgroundComponent, LinksComponent, PoesieComponent, ToolbarComponent],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule
  ],
  exports: [BackgroundComponent, LinksComponent, PoesieComponent, ToolbarComponent]
})
export class SharedModule { }
