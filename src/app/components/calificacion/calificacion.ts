import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.html',
  styleUrl: './calificacion.css',
})
export class Calificacion {
  readonly puntaje = input.required<number>();
  readonly maximo = input(5);

  protected readonly estrellas = computed(() =>
    Array.from({ length: this.maximo() }, (_, i) => i + 1),
  );
}
