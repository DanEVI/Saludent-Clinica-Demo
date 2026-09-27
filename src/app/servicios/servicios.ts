import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICIOS } from '../data/servicios';
import { EncabezadoSeccion } from '../components/encabezado-seccion/encabezado-seccion';
import { Tarjeta } from '../components/tarjeta/tarjeta';
import { BotonAgendar } from '../components/boton-agendar/boton-agendar';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink, EncabezadoSeccion, Tarjeta, BotonAgendar],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  protected readonly servicios = SERVICIOS;
}
