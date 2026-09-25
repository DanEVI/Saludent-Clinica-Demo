import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  servicios = [
    {
      nombre: 'Limpieza y profilaxis',
      icono: 'bi-droplet-half',
      descripcion: 'Eliminamos sarro y placa bacteriana para prevenir caries y enfermedades de las encías.',
    },
    {
      nombre: 'Ortodoncia',
      icono: 'bi-grid-3x3-gap',
      descripcion: 'Brackets metálicos, estéticos y alineadores invisibles para corregir la posición de tus dientes.',
    },
    {
      nombre: 'Blanqueamiento dental',
      icono: 'bi-stars',
      descripcion: 'Aclaramos varios tonos el color de tus dientes de forma segura y sin sensibilidad.',
    },
    {
      nombre: 'Implantes dentales',
      icono: 'bi-bullseye',
      descripcion: 'Reemplazamos piezas perdidas con implantes de titanio que se ven y funcionan como dientes naturales.',
    },
    {
      nombre: 'Endodoncia',
      icono: 'bi-activity',
      descripcion: 'Tratamos el nervio del diente para salvarlo y eliminar el dolor sin necesidad de extraerlo.',
    },
    {
      nombre: 'Odontopediatría',
      icono: 'bi-emoji-smile',
      descripcion: 'Atención especial para los más pequeños en un ambiente cómodo y sin miedo.',
    },
    {
      nombre: 'Estética dental',
      icono: 'bi-gem',
      descripcion: 'Carillas, diseño de sonrisa y resinas estéticas para mejorar la forma y el color de tus dientes.',
    },
    {
      nombre: 'Urgencias 24/7',
      icono: 'bi-hospital',
      descripcion: 'Te atendemos a cualquier hora ante dolor intenso, golpes o piezas rotas.',
    },
  ];
}
