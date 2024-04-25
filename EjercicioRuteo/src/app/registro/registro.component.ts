import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export default class RegistroComponent {
  username: string = '';
  password: string = '';
  registroExitoso: boolean = false;
  usuarioExistente: boolean = false;
  nombreUsuarioRegistrado: string = '';

  constructor(private router: Router) {}

  registro() {
    // Obtener usuarios registrados del localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Verificar si el usuario ya existe
    const userExists = storedUsers.some((user: any) => user.username === this.username);

    if (userExists) {
      this.usuarioExistente = true;
      setTimeout(() => {
        this.usuarioExistente = false;
        this.router.navigate(['/error']); //el usuario ya existe
      }, 2000);
    } else {
      // Agregar nuevo usuario al localStorage
      storedUsers.push({ username: this.username, password: this.password });
      localStorage.setItem('users', JSON.stringify(storedUsers));

      // Establecer la variable de éxito en true
      this.registroExitoso = true;
      this.nombreUsuarioRegistrado = this.username; // Almacenar el nombre de usuario registrado

      // Retraso antes de redireccionar
      setTimeout(() => {
       // Redireccionar al usuario a la página de login
       this.router.navigate(['/login']);
      }, 2000); // Redirigir después de 2 segundos (ajustable según necesidades)
    }
  }  
}
