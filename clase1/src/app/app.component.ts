import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number | null = null;
  suma: number | null = null;

  calcular() {
    if (this.edadUno !== undefined && this.edadDos !== undefined) {
      this.promedio = (this.edadUno + this.edadDos) / 2;
      this.suma = this.edadUno + this.edadDos;
    }
  }

  limpiar() {
    this.edadUno = 0; 
    this.edadDos = 0;
    this.promedio = null;
    this.suma = null;
  }
}
