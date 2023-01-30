import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { Uf } from 'src/app/interface/LocalidadesApi/Estados/uf';
import { EmpresaService } from 'src/app/services/empresa.service';
import { LocalidadesService } from 'src/app/services/localidades.service';

@Component({
  selector: 'app-painel-administrativo',
  templateUrl: './painel-administrativo.component.html',
  styleUrls: ['./painel-administrativo.component.css']
})
export class PainelAdministrativoComponent implements OnInit {

  constructor(
    private empresaService: EmpresaService,
    private localidadesService: LocalidadesService) { }

  empresas!: Empresa[];
  estados!: Uf[];

  ngOnInit(): void {
    this.listarEmpresas();
    this.listarEstados();
  }

  listarEmpresas(): void {
    this.empresaService.getEmpresas().subscribe(resp => this.empresas = resp);
  }

  listarEstados() {
    this.localidadesService.getEstados().subscribe(resp => this.estados = resp);
  }

}
