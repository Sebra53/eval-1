import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  titulo: string = 'ESTUDIANTES';

  subtitulo: string =
    'SITIO PARA ESTUDIANTES ACTIVIDADES Y TALLERES';

}