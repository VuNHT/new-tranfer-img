import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ViewImgComponent } from './view-img/view-img.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TranferCarComponent } from './tranfer-car/tranfer-car.component';

export const AppRoutes: Routes = [
    {
        path: '',
    redirectTo: 'login',
    pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'tranfer-car',
        component: TranferCarComponent
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
