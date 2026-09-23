import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Precios } from './precios/precios';
import { Equipo } from './equipo/equipo';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'precios', component: Precios },
  { path: 'equipo', component: Equipo },
];
