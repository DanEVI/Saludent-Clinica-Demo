import { Component } from '@angular/core';
import { SERVICIOS } from '../data/servicios';
import { EncabezadoSeccion } from '../components/encabezado-seccion/encabezado-seccion';
import { BotonAgendar } from '../components/boton-agendar/boton-agendar';

@Component({
  selector: 'app-precios',
  imports: [EncabezadoSeccion, BotonAgendar],
  templateUrl: './precios.html',
  styleUrl: './precios.css',
})
export class Precios {
  protected readonly tratamientos = SERVICIOS;
}
