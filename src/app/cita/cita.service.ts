import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CitaService {
  readonly abierto = signal(false);
  readonly servicioInicial = signal('');

  abrir(servicio = '') {
    this.servicioInicial.set(servicio);
    this.abierto.set(true);
  }

  cerrar() {
    this.abierto.set(false);
  }
}
