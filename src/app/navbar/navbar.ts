import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BotonAgendar } from '../components/boton-agendar/boton-agendar';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, BotonAgendar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
