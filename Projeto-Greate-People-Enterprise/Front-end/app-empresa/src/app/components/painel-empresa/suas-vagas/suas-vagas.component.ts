import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { Vaga } from 'src/app/interface/VagasApi/vagas';
import { EmpresaService } from 'src/app/services/empresa.service';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-suas-vagas',
  templateUrl: './suas-vagas.component.html',
  styleUrls: ['./suas-vagas.component.css']
})
export class SuasVagasComponent implements OnInit {
  constructor(
    private vagas: VagasService,
    private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getEmpresaPorCnpj(this.storage.getItem("user_name") as string)
      .subscribe(resp => {
        this.empresa = resp;
        this.id = this.empresa.id as number;
        this.ListarVagas(this.id);
      });
  }

  storage: Storage = localStorage;
  listaVagas!: Vaga[];
  empresa!: Empresa;
  id!: number;

  public ListarVagas(id: number) {
    this.vagas.getVagas().subscribe(resposta => {
      // resposta.forEach(vaga => {
      //   if (vaga.idempresa == id) {
      //     this.listaVagas.push(vaga);
      //   }
      this.listaVagas = resposta;
    });
  }
}