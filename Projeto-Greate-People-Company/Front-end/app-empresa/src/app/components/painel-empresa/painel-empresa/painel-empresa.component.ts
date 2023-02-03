import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-painel-empresa',
  templateUrl: './painel-empresa.component.html',
  styleUrls: ['./painel-empresa.component.css']
})
export class PainelEmpresaComponent implements OnInit {

  storage: Storage = localStorage;
  empresa!: Empresa;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    let userLogado = this.storage.getItem("user_name") as string;
    this.empresaService.getEmpresaPorCnpj(userLogado).subscribe(resp => this.empresa = resp);
  }
}
