import { Routes } from '@angular/router';

import { Inicio } from './components/inicio/inicio';
import { Inscripcion } from './components/inscripcion/inscripcion';

import { Acgtividades } from './components/acgtividades/acgtividades';

import {Contacto} from './components/contacto/contacto';


export const routes: Routes = [

     {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    component: Inicio
  },

  {
    path: 'inscripcion',
    component: Inscripcion
  },

  {
    path: 'acgtividades',
    component: Acgtividades
  },

  {
    path: 'contacto',
    component: Contacto
  }

];
