import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent {
  constructor(private router: Router) { }

  voltar(): void {
    this.router.navigate(['/home']);
  }
}
