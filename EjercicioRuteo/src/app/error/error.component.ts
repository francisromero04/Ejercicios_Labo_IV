import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export default class ErrorComponent {
  constructor(private router: Router){}

  volver(){
    this.router.navigateByUrl('/registro');
  }
}

