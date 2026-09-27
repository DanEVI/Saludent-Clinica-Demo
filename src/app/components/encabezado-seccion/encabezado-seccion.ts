import { Component, input } from '@angular/core';

@Component({
  selector: 'app-encabezado-seccion',
  templateUrl: './encabezado-seccion.html',
  styleUrl: './encabezado-seccion.css',
})
export class EncabezadoSeccion {
  readonly icono = input.required<string>();
  readonly etiqueta = input.required<string>();
  readonly titulo = input.required<string>();
  readonly descripcion = input('');
  readonly nivel = input<1 | 2>(2);
}
