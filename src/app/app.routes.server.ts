import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // La sesión vive en el navegador, así que estas rutas se renderizan en el cliente.
  { path: 'login', renderMode: RenderMode.Client },
  { path: 'dashboard', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Server },
];
