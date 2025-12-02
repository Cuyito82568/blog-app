import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './agregar-usuario.html',
  styleUrl: './agregar-usuario.scss',
})
export class AgregarUsuario {
  usuario = {
    nombre: '',
    email: '',
    contrasena: '',
    rol: '',
    estado:''
  };

  private apiUrl = 'http://localhost:3000/agregarusuario';

  constructor(private http: HttpClient) {}

  OnSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post(this.apiUrl, this.usuario).subscribe(
        (response) => {
          console.log('Usuario agregado exitosamente', response);
          alert('Usuario agregado exitosamente');
          form.resetForm();
        },
        (error) =>{
          console.error('Error al agregar usuario', error);
          alert('Error al agregar usuario. Intentalo mas tarde.');
        }
      );
    }
  }


}
