import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-painel-administrativo',
  templateUrl: './painel-administrativo.component.html',
  styleUrls: ['./painel-administrativo.component.css']
})
export class PainelAdministrativoComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }

  empresas!: Empresa[];

  ngOnInit(): void {
    this.listarEmpresas();
  }

  listarEmpresas(): void {
    this.empresaService.getEmpresas().subscribe(resp => this.empresas = resp);
  }

}
