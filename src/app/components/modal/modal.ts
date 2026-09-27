import { Component, DOCUMENT, effect, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  host: { '(document:keydown.escape)': 'abierto() && cerrar.emit()' },
})
export class Modal {
  private readonly document = inject(DOCUMENT);

  readonly abierto = input.required<boolean>();
  readonly titulo = input.required<string>();
  readonly ancho = input(380);
  readonly cerrar = output();

  constructor() {
    effect(() => this.document.body.classList.toggle('overflow-hidden', this.abierto()));
  }
}
