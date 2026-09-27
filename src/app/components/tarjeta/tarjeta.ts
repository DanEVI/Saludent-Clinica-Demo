import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  template: '<ng-content />',
  styleUrl: './tarjeta.css',
  host: {
    '[class.con-relleno]': 'relleno()',
    '[class.elevable]': 'elevable()',
  },
})
export class Tarjeta {
  readonly relleno = input(true);
  readonly elevable = input(false);
}
