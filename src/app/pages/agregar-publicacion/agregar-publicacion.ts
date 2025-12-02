import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-publicacion',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './agregar-publicacion.html',
  styleUrl: './agregar-publicacion.scss',
})
export class AgregarPublicacion implements OnInit {
  // Arrays que faltan para los selects
  categorias: any[] = [];
  usuarios: any[] = [];

  publicacion = {
    titulo: '',
    contenido: '',
    resumen: '',
    id_categoria: '',
    id_usuario: '',
    imagen: '',
    estado: 'borrador'
  };

  private apiUrl = 'http://localhost:3000/agregarpublicacion';
  private categoriasUrl = 'http://localhost:3000/getAllCategorias';
  private usuariosUrl = 'http://localhost:3000/getAllUsuarios';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cargar categorías y usuarios al inicializar el componente
    this.cargarCategorias();
    this.cargarUsuarios();
  }

  cargarCategorias() {
    this.http.get<any[]>(this.categoriasUrl).subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorías cargadas:', this.categorias);
        console.log('Número de categorías:', this.categorias.length);
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
        console.error('URL:', this.categoriasUrl);
        console.error('Detalles del error:', error.message);
        alert('Error al cargar categorías. Verifica la consola y el backend.');
        this.categorias = [];
      }
    });
  }

  cargarUsuarios() {
    this.http.get<any[]>(this.usuariosUrl).subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log('Usuarios cargados:', this.usuarios);
        console.log('Número de usuarios:', this.usuarios.length);
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
        console.error('URL:', this.usuariosUrl);
        console.error('Detalles del error:', error.message);
        alert('Error al cargar usuarios. Verifica la consola y el backend.');
        this.usuarios = [];
      }
    });
  }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post(this.apiUrl, this.publicacion).subscribe(
        (response) => {
          console.log('Publicación agregada exitosamente', response);
          alert('Publicación agregada exitosamente');
          form.resetForm();
          // Restablecer valor por defecto del estado
          this.publicacion.estado = 'borrador';
        },
        (error) => {
          console.error('Error al agregar publicación', error);
          alert('Error al agregar publicación. Inténtalo más tarde.');
        }
      );
    }
  }
}
