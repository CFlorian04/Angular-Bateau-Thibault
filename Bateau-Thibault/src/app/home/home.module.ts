import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { ContactComponent } from '../contact/contact.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ShopComponent } from '../shop/shop.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MenuButtonComponent, ContactComponent, ToolbarComponent, ShopComponent],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }]
})
export class HomePageModule {}
