import { Component } from '@angular/core';

@Component({
  selector: 'app-casos',
  imports: [],
  templateUrl: './casos.html',
  styleUrl: './casos.css',
})
export class Casos {
  casos = [
    {
      tratamiento: 'Blanqueamiento dental',
      descripcion: 'Aclaramiento de 6 tonos en una sola sesión.',
      duracion: '1 sesión',
      antes: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600',
      despues: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600',
    },
    {
      tratamiento: 'Ortodoncia invisible',
      descripcion: 'Corrección de apiñamiento con alineadores transparentes.',
      duracion: '14 meses',
      antes: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600',
      despues: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600',
    },
    {
      tratamiento: 'Carillas de porcelana',
      descripcion: 'Diseño de sonrisa con 8 carillas en el sector anterior.',
      duracion: '3 semanas',
      antes: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=600',
      despues: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600',
    },
    {
      tratamiento: 'Implante dental',
      descripcion: 'Reemplazo de un premolar perdido con implante de titanio.',
      duracion: '4 meses',
      antes: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600',
      despues: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600',
    },
  ];
}
