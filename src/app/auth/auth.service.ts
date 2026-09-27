import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Usuario {
  email: string;
  nombre: string;
}

const CLAVE_SESION = 'saludent.sesion';

// Temporal: reemplazar por POST /api/auth/login cuando exista el backend.
const USUARIO_DEMO = {
  email: 'admin@saludent.pe',
  password: 'saludent123',
  nombre: 'Administrador',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly usuarioActual = signal<Usuario | null>(this.leerSesion());

  readonly usuario = this.usuarioActual.asReadonly();
  readonly autenticado = computed(() => this.usuarioActual() !== null);

  async login(email: string, password: string): Promise<boolean> {
    const valido =
      email.trim().toLowerCase() === USUARIO_DEMO.email && password === USUARIO_DEMO.password;
    if (!valido) return false;

    const usuario = { email: USUARIO_DEMO.email, nombre: USUARIO_DEMO.nombre };
    this.usuarioActual.set(usuario);
    this.guardarSesion(usuario);
    return true;
  }

  logout() {
    this.usuarioActual.set(null);
    this.guardarSesion(null);
  }

  private leerSesion(): Usuario | null {
    if (!this.esNavegador) return null;
    try {
      const sesion = sessionStorage.getItem(CLAVE_SESION);
      return sesion ? JSON.parse(sesion) : null;
    } catch {
      return null;
    }
  }

  private guardarSesion(usuario: Usuario | null) {
    if (!this.esNavegador) return;
    try {
      if (usuario) sessionStorage.setItem(CLAVE_SESION, JSON.stringify(usuario));
      else sessionStorage.removeItem(CLAVE_SESION);
    } catch {
      // Sin almacenamiento disponible la sesión dura solo mientras la página esté abierta.
    }
  }
}
