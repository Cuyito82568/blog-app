import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {AgregarUsuario} from './pages/agregar-usuario/agregar-usuario';
import { AgregarCategoria } from './pages/agregar-categoria/agregar-categoria';
import { AgregarPublicacion } from './pages/agregar-publicacion/agregar-publicacion';
import { MostrarPublicacion } from './pages/mostrar-publicacion/mostrar-publicacion';
import { Publicacion } from './pages/publicacion/publicacion';
import { Login } from './pages/login/login';
import { ListadoCategorias } from './pages/listado-categorias/listado-categorias';
import {PublicacionesPorCategoria} from './pages/publicaciones-por-categoria/publicaciones-por-categoria';

export const routes: Routes = [
  {path: '', component: Login},
  {path:'home', component: Home},
  {path:'agregar-usuario', component: AgregarUsuario},
  {path:'agregar-categoria', component: AgregarCategoria},
  {path:'agregar-publicacion', component: AgregarPublicacion},
  {path:'mostrar-publicacion', component: MostrarPublicacion},
  {path: 'publicacion/:id', component: Publicacion},
  {path: 'listado-categorias', component: ListadoCategorias},
  {path: 'categoria/:id', component: PublicacionesPorCategoria},
  {path: '**', redirectTo: ''} // Ruta comodín para redirigir a la página principal en caso de ruta no encontrada
];
