import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ViewImgComponent } from './view-img/view-img.component';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
    {
        path: '',
    redirectTo: 'dasboard',
    pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: MenuComponent
      },
      {
        path: 'view-img',
        component: ViewImgComponent
      },
      {
        path: '**',
        component: MenuComponent
      }];
