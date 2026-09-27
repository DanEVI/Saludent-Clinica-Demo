import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { EncabezadoSeccion } from '../components/encabezado-seccion/encabezado-seccion';

@Component({
  selector: 'app-dashboard',
  imports: [EncabezadoSeccion],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
