import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonAgendar } from '../components/boton-agendar/boton-agendar';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, BotonAgendar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
