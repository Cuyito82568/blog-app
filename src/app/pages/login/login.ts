import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html'
})
export class Login {

  login = {
    email: '',
    contrasena: ''
  };

  private apiUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) return;

    this.http.post(this.apiUrl, this.login).subscribe(
  (usuario: any) => {

    if (!usuario || usuario.length === 0) {
      alert("Credenciales incorrectas");
      return;
    }

    // GUARDAR SOLO EN sessionStorage
    sessionStorage.setItem('usuario', JSON.stringify(usuario));

    this.router.navigate(['/home']);
  }
);
}
}
