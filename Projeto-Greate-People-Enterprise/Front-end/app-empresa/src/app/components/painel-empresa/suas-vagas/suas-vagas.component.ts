import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/interface/VagasApi/vagas';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-suas-vagas',
  templateUrl: './suas-vagas.component.html',
  styleUrls: ['./suas-vagas.component.css']
})
export class SuasVagasComponent implements OnInit {
  constructor(private vagas: VagasService) { }
  ngOnInit(): void {
    this.ListarVagas()
  }

  listaVagas!: Vaga[];

  public ListarVagas() {
    return this.vagas.getVagas().subscribe(resposta => this.listaVagas = resposta)
  }
}
