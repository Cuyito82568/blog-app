import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-publicaciones-por-categoria',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './publicaciones-por-categoria.html',
  styleUrls: ['./publicaciones-por-categoria.scss']
})
export class PublicacionesPorCategoria implements OnInit {

  publicaciones: any[] = [];
  categoriaId!: number;

  private apiUrl = 'http://localhost:3000/publicaciones-categoria/';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.categoriaId = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any[]>(this.apiUrl + this.categoriaId).subscribe(
      data => this.publicaciones = data,
      error => console.error(error)
    );
  }

  volver() {
    window.history.back();
  }
}

