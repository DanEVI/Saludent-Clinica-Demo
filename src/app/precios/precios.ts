import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-precios',
  imports: [RouterLink],
  templateUrl: './precios.html',
  styleUrl: './precios.css',
})
export class Precios {
  tratamientos = [
    { nombre: 'Limpieza y profilaxis', duracion: '45 min', precioRegular: 120, precioHoy: 89, promo: 26 },
    { nombre: 'Ortodoncia', duracion: '60 min', precioRegular: 0, precioHoy: 2500, promo: 0 },
    { nombre: 'Blanqueamiento dental', duracion: '90 min', precioRegular: 450, precioHoy: 349, promo: 22 },
    { nombre: 'Implantes dentales', duracion: '120 min', precioRegular: 0, precioHoy: 3200, promo: 0 },
    { nombre: 'Endodoncia', duracion: '75 min', precioRegular: 0, precioHoy: 380, promo: 0 },
    { nombre: 'Odontopediatría', duracion: '40 min', precioRegular: 100, precioHoy: 75, promo: 25 },
    { nombre: 'Estética dental', duracion: '90 min', precioRegular: 0, precioHoy: 850, promo: 0 },
    { nombre: 'Urgencias 24/7', duracion: '30 min', precioRegular: 0, precioHoy: 150, promo: 0 },
  ];
}
