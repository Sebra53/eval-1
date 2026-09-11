import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  titulo: string = 'PORTAL ESTUDIANTES PARA ACTIVIDADES';

  subtitulo: string =
    'SITIO DONDE CONOCERA ACTIVIDADES Y TALLERES ADEMAS DE DATOS DE CONTACTO Y DONDE SU SOLICITUD SERA ESCUCHADA';

}