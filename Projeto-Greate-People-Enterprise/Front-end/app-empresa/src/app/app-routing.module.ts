import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoComponent } from './components/alteracao/alteracao.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ErroComponent } from './components/erro/erro.component';
import { ExclusaoComponent } from './components/exclusao/exclusao.component';
import { HomeEmpresaComponent } from './components/home/home-empresa/home-empresa.component';
import { LoginComponent } from './components/login/login.component';
import { DetalhesEmpresaComponent } from './components/painel-administrativo/detalhes-empresa/detalhes-empresa.component';
import { PainelAdministrativoComponent } from './components/painel-administrativo/painel-administrativo/painel-administrativo.component';
import { PainelEmpresaComponent } from './components/painel-empresa/painel-empresa/painel-empresa.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeEmpresaComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "login", component: LoginComponent },
  { path: "painelEmpresa", component: PainelEmpresaComponent, canActivate: [AuthGuard] },
  { path: "painelEmpresa/alterar/:id", component: AlteracaoComponent, canActivate: [AuthGuard] },
  { path: "painelEmpresa/excluir/:id", component: ExclusaoComponent, canActivate: [AuthGuard] },
  { path: "painelAdministrativo", component: PainelAdministrativoComponent, canActivate: [AuthGuard] },
  { path: "painelAdministrativo/detalhes/:idempresa", component: DetalhesEmpresaComponent, canActivate: [AuthGuard] },
  { path: "erro", component: ErroComponent },
  { path: "**", component: ErroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
