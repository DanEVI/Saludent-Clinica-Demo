import { Component, computed, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-mensaje-error',
  template: `
    @if (mensaje()) {
      <div class="invalid-feedback d-block">{{ mensaje() }}</div>
    }
  `,
})
export class MensajeError {
  readonly errores = input.required<ValidationErrors | null>();
  readonly mensajes = input.required<Record<string, string>>();

  protected readonly mensaje = computed(() => {
    const errores = this.errores();
    if (!errores) return '';
    const clave = Object.keys(errores).find((clave) => clave in this.mensajes());
    return clave ? this.mensajes()[clave] : '';
  });
}
