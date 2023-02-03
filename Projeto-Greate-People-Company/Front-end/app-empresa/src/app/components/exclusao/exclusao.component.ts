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

  id!: string;
  empresa!: Empresa;
  userLogado!: string;
  storage: Storage = localStorage;
  mensagemExclusao!: string;

  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userLogado = this.storage.getItem("user_name") as string;
    if (this.userLogado.length == 14) {
      this.mensagemExclusao = "Deseja excluir sua conta?";
    } else {
      this.mensagemExclusao = "Deseja excluir essa conta?";
    }
    this.id = this.route.snapshot.paramMap.get("id") as string;
    this.empresaService.getEmpresaPorId(this.id).subscribe(resp => this.empresa = resp)
  }

  excluir(id: string): void {
    this.empresaService.deleteEmpresa(id).subscribe(resposta => {
      if (resposta) {
        this.voltar();
      } else {
        this.router.navigate(["/erro"]);
      }
    });
  }

  voltar(): void {
    this.userLogado.length == 14 ? this.router.navigate(["/home"]) : this.router.navigate(["/painelAdministrativo"])
  }
}
