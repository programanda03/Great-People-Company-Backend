import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/interface/EmpresaApi/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-exclusao',
  templateUrl: './exclusao.component.html',
  styleUrls: ['./exclusao.component.css']
})
export class ExclusaoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  id!: string;
  empresa!: Empresa;
  userLogado!: string;
  storage: Storage = localStorage;

  ngOnInit(): void {
    this.userLogado = this.storage.getItem("user_name") as string;
    this.id = this.route.snapshot.paramMap.get("id") as string;
    this.empresaService.getEmpresaPorId(this.id).subscribe(resp => this.empresa = resp)
  }

  excluir(id: string): void {
    this.empresaService.deleteEmpresa(id).subscribe(resposta => {
      if (resposta) {
        this.router.navigate(["/home"]);
      } else {
        this.router.navigate(["/erro"]);
      }
    })
  }

  voltar(): void {
    this.userLogado.length == 14 ? this.router.navigate(["/painelEmpresa"]) : this.router.navigate(["/painelAdministrativo"])
  }
}
