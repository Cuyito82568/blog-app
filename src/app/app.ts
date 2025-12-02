import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private router: Router) {}

  // validar sesión
  isLogged() {
    return sessionStorage.getItem('usuario') !== null;
  }

  // cerrar sesión
  logout() {
    sessionStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}

