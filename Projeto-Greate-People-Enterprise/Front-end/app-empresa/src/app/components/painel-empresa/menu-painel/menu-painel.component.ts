import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-painel',
  templateUrl: './menu-painel.component.html',
  styleUrls: ['./menu-painel.component.css']
})
export class MenuPainelComponent {
  constructor() { }

  mostrar: boolean = false;

  mostrarSuasVagas(): void {
    this.mostrar = false;
  }
  mostrarDadosUsuario(): void {
    this.mostrar = true;
  }
}
