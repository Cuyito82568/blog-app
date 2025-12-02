import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './publicacion.html',
  styleUrls: ['./publicacion.scss']
})
export class Publicacion implements OnInit {

  publicacion: any = null;
  categoriaNombre: string = '';
  usuarioNombre: string = '';
  private apiUrl = 'http://localhost:3000/getPublicacionById/';
  private apiCategoriaUrl = 'http://localhost:3000/getCategoriaById/';
  private apiUsuarioUrl = 'http://localhost:3000/getUsuarioById/';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(this.apiUrl + id).subscribe(
      (data: any) => this.publicacion = data[0],
      error => console.error('Error:', error)
    );
    this.http.get(this.apiCategoriaUrl + id).subscribe(
      (data: any) => this.categoriaNombre = data[0].nombre,
      error => console.error('Error:', error)
    );
    this.http.get(this.apiUsuarioUrl + id).subscribe(
      (data: any) => this.usuarioNombre = data[0].nombre,
      error => console.error('Error:', error)
    );
  }
  volver() {
    window.history.back();
  }
}
