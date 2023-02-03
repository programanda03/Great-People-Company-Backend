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

  erro!: string;
  user!: Usuario;
  storage: Storage = localStorage;

  constructor(
    private router: Router,
    private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.user = new Usuario();
    this.storage.removeItem("user_name");
  }

  validar(usuario: Usuario): void {
    this.filtrarDados(usuario);
    this.usuarioService.postUsuario(usuario).subscribe(resposta => {

      if (resposta != null) {
        this.storage.setItem("user_name", resposta.nome);
        resposta.nivel == 'administrador' ? this.router.navigate(['painelAdministrativo']) : this.router.navigate(['painelEmpresa']);
      } else {
        this.mostrarErro("Usuário ou senha inválidos");
      }
    });
  }

  mostrarErro(erro: string): void {
    const divErro = document.getElementById('mensagem-erro') as HTMLElement;
    divErro.setAttribute('class', 'alert alert-danger');
    divErro.style.visibility = 'visible';
    this.erro = erro;
  }

  mostrarSenha(): void {
    const inputSenha = document.getElementById('password');
    if (inputSenha?.getAttribute('type') == 'password') {
      inputSenha?.setAttribute("type", "text");
    } else {
      inputSenha?.setAttribute("type", "password");
    }
  }
  filtrarDados(usuario: Usuario): void {
    usuario.nome = usuario.nome.replace(/[^0-9]/g, "")
  }
}
