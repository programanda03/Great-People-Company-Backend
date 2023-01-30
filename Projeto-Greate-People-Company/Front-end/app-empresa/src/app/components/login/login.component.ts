import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private usuarioService: UsuariosService) { }

  erro!: string;
  user!: Usuario;
  storage: Storage = localStorage;

  ngOnInit(): void {
    this.user = new Usuario();
    this.storage.removeItem("user_name");
  }


  validar(usuario: Usuario): void {
    this.usuarioService.postUsuario(usuario).subscribe(resposta => {

      if (resposta != null) {
        this.storage.setItem("user_name", resposta.nome);
        resposta.nivel == 'administrador' ? this.router.navigate(['painelAdministrativo']) : this.router.navigate(['painelEmpresa']);
      } else {
        this.erro = "Usuário ou senha inválido";
      }
    });
  }

  mostrarSenha(): void {
    const inputSenha = document.getElementById('password');
    if (inputSenha?.getAttribute('type') == 'password') {
      inputSenha?.setAttribute("type", "text");
    } else {
      inputSenha?.setAttribute("type", "password");
    }
  }
}
