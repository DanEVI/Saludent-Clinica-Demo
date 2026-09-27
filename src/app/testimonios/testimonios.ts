import { Component } from '@angular/core';
import { EncabezadoSeccion } from '../components/encabezado-seccion/encabezado-seccion';
import { Tarjeta } from '../components/tarjeta/tarjeta';
import { Calificacion } from '../components/calificacion/calificacion';

@Component({
  selector: 'app-testimonios',
  imports: [EncabezadoSeccion, Tarjeta, Calificacion],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css',
})
export class Testimonios {
  testimonios = [
    {
      nombre: 'María Fernández',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg',
      comentario:
        'Me explicaron todo el tratamiento y el precio desde la primera cita. Mi sonrisa cambió por completo.',
      puntaje: 5,
    },
    {
      nombre: 'Jorge Castillo',
      foto: 'https://randomuser.me/api/portraits/men/32.jpg',
      comentario:
        'Tenía miedo a la cirugía, pero el doctor me dio mucha confianza. El resultado es muy natural.',
      puntaje: 5,
    },
    {
      nombre: 'Ricardo Méndez',
      foto: 'https://randomuser.me/api/portraits/men/46.jpg',
      comentario: 'Reservé por la web en dos minutos y me atendieron puntual. Muy buen servicio.',
      puntaje: 4,
    },
  ];
}
