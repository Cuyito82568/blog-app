import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-categorias',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './listado-categorias.html',
  styleUrls: ['./listado-categorias.scss']
})
export class ListadoCategorias implements OnInit {

  categorias: any[] = [];
  private apiUrl = 'http://localhost:3000/getAllCategorias';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => this.categorias = data,
      error => console.error('Error al cargar categorías:', error)
    );
  }

  verPublicaciones(id: number) {
    this.router.navigate(['/categoria', id]);
  }
}

