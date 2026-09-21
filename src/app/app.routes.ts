import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Precios } from './precios/precios';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'precios', component: Precios },
];
