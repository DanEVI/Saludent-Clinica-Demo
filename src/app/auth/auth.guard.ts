import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (_route, state) => {
  if (inject(AuthService).autenticado()) return true;
  return inject(Router).createUrlTree(['/login'], { queryParams: { redirigir: state.url } });
};

export const invitadoGuard: CanActivateFn = () => {
  if (!inject(AuthService).autenticado()) return true;
  return inject(Router).createUrlTree(['/dashboard']);
};
