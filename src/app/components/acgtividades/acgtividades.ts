import { Component } from '@angular/core';

@Component({
  selector: 'app-acgtividades',
  standalone: true,
  imports: [],
  templateUrl: './acgtividades.html',
  styleUrl: './acgtividades.css'
})
//array actividades
export class Acgtividades{
  actividades = [
    { id: 1, nombre: 'Duelo a muerte con cuchillos', descripcion: 'actividad peligrosa' },
    { id: 2, nombre: 'Cacería en grupo', descripcion: 'actividad ilegal?' },
    { id: 3, nombre: 'Investigación de escena del crimen', descripcion: 'no deberian estar ahi' },
    { id: 4, nombre: 'Fútbol', descripcion: 'pelota, gol, messi' }
  ];
}