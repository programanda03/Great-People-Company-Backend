import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { Endereco } from 'src/app/interface/EmpresaApi/endereco';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  storage: Storage = localStorage;
  empresa!: Empresa;
  endereco!: Endereco;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    let userLogado = this.storage.getItem("user_name") as string;
    this.empresaService.getEmpresaPorCnpj(userLogado).subscribe(resp => {
      this.empresa = resp;
      this.endereco = this.empresa.enderecoInfo as Endereco;
    });
  }
}
