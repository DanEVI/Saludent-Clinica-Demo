import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Tarjeta } from '../components/tarjeta/tarjeta';
import { MensajeError } from '../components/mensaje-error/mensaje-error';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Tarjeta, MensajeError],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  protected readonly cargando = signal(false);
  protected readonly error = signal('');
  protected readonly verPassword = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  protected readonly mensajes = {
    email: { required: 'Ingresa tu email.', email: 'Ingresa un email válido.' },
    password: { required: 'Ingresa tu contraseña.' },
  };

  protected invalido(campo: keyof typeof this.form.controls) {
    const control = this.form.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }

  protected errores(campo: keyof typeof this.form.controls) {
    return this.invalido(campo) ? this.form.controls[campo].errors : null;
  }

  protected async ingresar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cargando.set(true);
    this.error.set('');
    const { email, password } = this.form.getRawValue();
    const valido = await this.auth.login(email, password);
    this.cargando.set(false);

    if (!valido) {
      this.error.set('Email o contraseña incorrectos.');
      return;
    }

    const destino = this.route.snapshot.queryParamMap.get('redirigir');
    this.router.navigateByUrl(destino?.startsWith('/') ? destino : '/dashboard');
  }
}
