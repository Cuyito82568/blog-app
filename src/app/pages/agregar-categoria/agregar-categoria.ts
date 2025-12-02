import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './agregar-categoria.html',
  styleUrl: './agregar-categoria.scss',
})
export class AgregarCategoria {
  categoria = {
    nombre: '',
    descripcion: '',
    estado: ''
  };
  private apiUrl = 'http://localhost:3000/agregarcategoria';

  constructor(private http: HttpClient) {}
  OnSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post(this.apiUrl, this.categoria).subscribe(
        (response) => {
          console.log('Categoría agregada exitosamente', response);
          alert('Categoría agregada exitosamente');
          form.resetForm();
        },
        (error) => {
          console.error('Error al agregar categoría', error);
          alert('Error al agregar categoría. Intentalo mas tarde.');
        }
      );
    }
  }
}
