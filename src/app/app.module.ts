import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewImgComponent } from './view-img/view-img.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { MDBBootstrapModule, NavbarModule, WavesModule, DropdownModule,
  ButtonsModule, CollapseModule,
  ModalModule, TooltipModule, PopoverModule,
  BadgeModule, IconsModule  } from 'angular-bootstrap-md';
import { Utils } from './shared/utils/utils';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewImgComponent,
    MenuComponent,
    jqxBarGaugeComponent,
    jqxKnobComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
     WavesModule.forRoot(),
     DropdownModule.forRoot(),
     ButtonsModule, CollapseModule,
     ModalModule, TooltipModule, PopoverModule,
     BadgeModule, IconsModule ,
     RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
