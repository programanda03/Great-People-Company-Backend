import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { Endereco } from 'src/app/interface/EmpresaApi/endereco';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-detalhes-empresa',
  templateUrl: './detalhes-empresa.component.html',
  styleUrls: ['./detalhes-empresa.component.css']
})
export class DetalhesEmpresaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService) { }

  empresa!: Empresa;
  endereco!: Endereco;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("idempresa") as string;
    this.empresaService.getEmpresaPorId(id).subscribe(resp => {
      this.empresa = resp;
      this.endereco = this.empresa.enderecoInfo as Endereco;
    })
  }
}
