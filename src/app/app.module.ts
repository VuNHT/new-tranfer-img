import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewImgComponent } from './view-img/view-img.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { MDBBootstrapModule, NavbarModule, WavesModule, DropdownModule } from 'angular-bootstrap-md';
import { Utils } from './shared/utils/utils';

@NgModule({
  declarations: [
    AppComponent,
    ViewImgComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
     WavesModule.forRoot(),
     DropdownModule.forRoot(),
     RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
