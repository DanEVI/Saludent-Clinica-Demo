import { Component, inject, input } from '@angular/core';
import { CitaService } from '../../cita/cita.service';

@Component({
  selector: 'app-boton-agendar',
  templateUrl: './boton-agendar.html',
})
export class BotonAgendar {
  private readonly cita = inject(CitaService);

  readonly servicio = input('');
  readonly variante = input<'primario' | 'contorno' | 'enlace'>('primario');
  readonly grande = input(false);

  protected abrir() {
    this.cita.abrir(this.servicio());
  }
}
