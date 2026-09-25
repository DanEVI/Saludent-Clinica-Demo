import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servicios } from './servicios/servicios';
import { Precios } from './precios/precios';
import { Equipo } from './equipo/equipo';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: Servicios },
  { path: 'precios', component: Precios },
  { path: 'equipo', component: Equipo },
];
