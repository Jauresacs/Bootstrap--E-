import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page.component';
import {DataPage} from './pages/data-page/data-page.component';
import {LoginPage} from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'data',
    component: DataPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
];
