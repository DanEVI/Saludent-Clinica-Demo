import { Component, effect, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CitaService } from './cita.service';
import { SERVICIOS } from '../data/servicios';
import { Modal } from '../components/modal/modal';
import { MensajeError } from '../components/mensaje-error/mensaje-error';

const HORA_APERTURA = '08:00';
const HORA_CIERRE = '20:00';

function fechaLocal(fecha: Date) {
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  return `${fecha.getFullYear()}-${mes}-${dia}`;
}

function fechaFutura(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  return control.value < fechaLocal(new Date()) ? { pasada: true } : null;
}

function horaAtencion(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  return control.value < HORA_APERTURA || control.value > HORA_CIERRE
    ? { fueraDeHorario: true }
    : null;
}

@Component({
  selector: 'app-cita-modal',
  imports: [ReactiveFormsModule, Modal, MensajeError],
  templateUrl: './cita-modal.html',
  styleUrl: './cita-modal.css',
})
export class CitaModal {
  protected readonly cita = inject(CitaService);
  private readonly fb = inject(FormBuilder);

  protected readonly servicios = SERVICIOS.map((servicio) => servicio.nombre);
  protected readonly horaApertura = HORA_APERTURA;
  protected readonly horaCierre = HORA_CIERRE;
  protected readonly hoy = fechaLocal(new Date());
  protected readonly confirmada = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    servicio: ['', Validators.required],
    fecha: ['', [Validators.required, fechaFutura]],
    hora: ['', [Validators.required, horaAtencion]],
  });

  protected readonly mensajes = {
    nombre: {
      required: 'Ingresa tu nombre.',
      minlength: 'Ingresa tu nombre (mínimo 3 caracteres).',
    },
    email: { required: 'Ingresa tu email.', email: 'Ingresa un email válido.' },
    servicio: { required: 'Selecciona un servicio.' },
    fecha: { required: 'Elige una fecha.', pasada: 'Elige una fecha futura.' },
    hora: {
      required: 'Elige una hora.',
      fueraDeHorario: `Atendemos de ${HORA_APERTURA} a ${HORA_CIERRE}.`,
    },
  };

  constructor() {
    effect(() => {
      if (this.cita.abierto()) {
        this.confirmada.set(false);
        this.form.reset({ servicio: this.cita.servicioInicial() });
      }
    });
  }

  protected invalido(campo: keyof typeof this.form.controls) {
    const control = this.form.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }

  protected errores(campo: keyof typeof this.form.controls) {
    return this.invalido(campo) ? this.form.controls[campo].errors : null;
  }

  protected confirmar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.confirmada.set(true);
  }
}
