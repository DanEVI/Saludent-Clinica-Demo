import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servicios } from './servicios/servicios';
import { Precios } from './precios/precios';
import { Equipo } from './equipo/equipo';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { authGuard, invitadoGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: Servicios },
  { path: 'precios', component: Precios },
  { path: 'equipo', component: Equipo },
  { path: 'login', component: Login, canActivate: [invitadoGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
];
