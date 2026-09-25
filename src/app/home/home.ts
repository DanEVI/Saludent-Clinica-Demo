import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Casos } from '../casos/casos';
import { Testimonios } from '../testimonios/testimonios';

@Component({
  selector: 'app-home',
  imports: [Hero, Casos, Testimonios],
  templateUrl: './home.html',
})
export class Home {}
