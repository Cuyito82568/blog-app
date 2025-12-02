import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-mostrar-publicacion',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './mostrar-publicacion.html',
  styleUrl: './mostrar-publicacion.scss',
})
export class MostrarPublicacion implements OnInit {
   publicaciones: any[] = [];
  private apiUrl = 'http://localhost:3000/getAllPublicaciones';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        this.publicaciones = data;
      },
      (err) => {
        console.error('Error cargando publicaciones:', err);
        alert('Error cargando publicaciones');
      }
    );
  }

  volverAtras() {
    window.history.back();
  }
}
