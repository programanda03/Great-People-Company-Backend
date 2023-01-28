import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { Endereco } from 'src/app/interface/EmpresaApi/endereco';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ViacepService } from 'src/app/services/viacep.service';
import { LocalidadesService } from 'src/app/services/localidades.service';
import { Uf } from 'src/app/interface/LocalidadesApi/Estados/uf';
import { Municipio } from 'src/app/interface/LocalidadesApi/Cidades/municipio';
import { Usuario } from 'src/app/classes/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private empresaService: EmpresaService,
    private viacep: ViacepService,
    private localidades: LocalidadesService,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.endereco = { logradouro: '', cep: '', cidade: '', uf: '', numero: undefined };
    this.empresa = { nome: '', razaoSocial: '', cnpj: '', telefone: '', site: '' };
    this.listarEstados();
  }

  empresa!: Empresa;
  endereco!: Endereco;
  estados!: Uf[];
  cidades!: Municipio[];
  user: Usuario = new Usuario();
  senha!: string;

  incluir(empresa: Empresa): void {
    empresa.enderecoInfo = this.endereco;
    this.empresaService.postEmpresa(empresa).subscribe(resp => this.empresa = resp);

    this.user.nome = this.empresa.cnpj;
    this.user.senha = this.senha;
    this.usuariosService.postUsuarioNovo(this.user).subscribe(resp => this.user = resp);
    this.router.navigate(['/login']);
  }

  preencherEnderecoPorCep(cep: string): void {
    this.viacep.getEnderecoPorCep(cep).subscribe(resposta => {
      this.endereco = {
        logradouro: resposta.logradouro, cidade: resposta.localidade, uf: resposta.uf, cep: this.endereco.cep, numero: this.endereco.numero
      };
      this.listarMunicipiosPorUf(this.endereco.uf);
    });
  }

  listarEstados(): void {
    this.localidades.getEstados().subscribe(resposta => this.estados = resposta);
  }

  listarMunicipiosPorUf(uf: string): void {
    this.localidades.getMunicipiosPorUf(uf).subscribe(resposta => this.cidades = resposta);
  }

  mostrarSenha(): void {
    const inputSenha = document.getElementById('senha');
    if (inputSenha?.getAttribute('type') == 'password') {
      inputSenha?.setAttribute("type", "text");
    } else {
      inputSenha?.setAttribute("type", "password");
    }
  }
}
