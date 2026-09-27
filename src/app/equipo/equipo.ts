import { Component } from '@angular/core';
import { EncabezadoSeccion } from '../components/encabezado-seccion/encabezado-seccion';
import { Tarjeta } from '../components/tarjeta/tarjeta';

@Component({
  selector: 'app-equipo',
  imports: [EncabezadoSeccion, Tarjeta],
  templateUrl: './equipo.html',
  styleUrl: './equipo.css',
})
export class Equipo {
  protected readonly doctores = [
    {
      nombre: 'Dra. Lucía Ramírez',
      especialidad: 'Ortodoncia y Ortopedia Maxilar',
      registro: 'COP 28451 · Universidad Peruana de Ciencias Aplicadas',
      anios: 12,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_X3-JmfvQnqX86faPqdUlRtJDbrYl_43LQkMDgWUBjQ&s=10',
    },
    {
      nombre: 'Dr. Andrés Salgado',
      especialidad: 'Implantología y Cirugía Oral',
      registro: 'COP 31207 · Máster en Implantología, Barcelona',
      anios: 15,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MqQ5r6lZrz1Awz9sI4AdpBd2RFiTNk76JdwnCazccA&s=10',
    },
    {
      nombre: 'Dra. Camila Torres',
      especialidad: 'Estética Dental y Rehabilitación',
      registro: 'COP 35980 · Diplomado en Carillas Cerámicas',
      anios: 8,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpT2RZokc1omaBNpBnFSiZW6c1IclRINiZQ9uaAnosCA&s=10',
    },
    {
      nombre: 'Dr. Martín Quispe',
      especialidad: 'Odontopediatría',
      registro: 'COP 39112 · Especialista en manejo de conducta infantil',
      anios: 10,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8MtvIognhqYh0KVao4wsR9-odS5oud-Pd3eN1s7XSA&s=10',
    },
  ];
}
