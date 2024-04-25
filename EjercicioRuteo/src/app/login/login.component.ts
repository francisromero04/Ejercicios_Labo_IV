import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  username: string = '';
  password: string = '';
  avanzarLogin: boolean = false;

  constructor(private router: Router) {}

  /*login() {
    // Obtener los valores almacenados en el localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (this.username === storedUsername && this.password === storedPassword) {
      // Credenciales válidas, redireccionar al usuario a la página de bienvenida
      this.router.navigate(['/bienvenida']);
    } else {
      // Credenciales inválidas, redireccionar al usuario a la página de error
      this.router.navigate(['/error']);
    }
  }*/

  login() {
    // Obtener usuarios registrados del localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Buscar el usuario por su nombre de usuario
    const user = storedUsers.find((user: any) => user.username === this.username);

    if (user && user.password === this.password) {
      this.avanzarLogin = true;
      setTimeout(() => {
      this.avanzarLogin = false;
      // Credenciales válidas, redireccionar al usuario a la página de bienvenida
      this.router.navigate(['/bienvenida']);
      }, 2000);
      
    } else {
      // Credenciales inválidas, redireccionar al usuario a la página de error
      this.router.navigate(['/error']);
    }
  }
}