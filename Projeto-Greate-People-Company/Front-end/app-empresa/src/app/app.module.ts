import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { EmpresaComponent } from './components/empresa.component';
import { MenuGeralComponent } from './components/menu-geral/menu-geral.component';
import { MenuHomeComponent } from './components/home/menu-home/menu-home.component';
import { HomeEmpresaComponent } from './components/home/home-empresa/home-empresa.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { PainelEmpresaComponent } from './components/painel-empresa/painel-empresa/painel-empresa.component';
import { SuasVagasComponent } from './components/painel-empresa/suas-vagas/suas-vagas.component';
import { DadosUsuarioComponent } from './components/painel-empresa/dados-usuario/dados-usuario.component';
import { PainelAdministrativoComponent } from './components/painel-administrativo/painel-administrativo/painel-administrativo.component';
import { AlteracaoComponent } from './components/alteracao/alteracao.component';
import { ExclusaoComponent } from './components/exclusao/exclusao.component';
import { ErroComponent } from './components/erro/erro.component';
import { DetalhesEmpresaComponent } from './components/painel-administrativo/detalhes-empresa/detalhes-empresa.component';
import { FiltroEmpresaPipe } from './pipes/filtro-empresa.pipe';
import { FiltroVagasPipe } from './pipes/filtro-vagas.pipe';
import { FormatacaoCnpjPipe } from './pipes/formatacao-cnpj.pipe';
import { FormatacaoTelefonePipe } from './pipes/formatacao-telefone.pipe';
import { FormatacaoCepPipe } from './pipes/formatacao-cep.pipe';
import { CamposopcionaisPipe } from './pipes/camposopcionais.pipe';

@NgModule({
  declarations: [
    EmpresaComponent,
    MenuGeralComponent,
    MenuHomeComponent,
    HomeEmpresaComponent,
    CadastroComponent,
    LoginComponent,
    PainelEmpresaComponent,
    SuasVagasComponent,
    DadosUsuarioComponent,
    PainelAdministrativoComponent,
    AlteracaoComponent,
    ExclusaoComponent,
    ErroComponent,
    DetalhesEmpresaComponent,
    FiltroEmpresaPipe,
    FiltroVagasPipe,
    FormatacaoCnpjPipe,
    FormatacaoTelefonePipe,
    FormatacaoCepPipe,
    CamposopcionaisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmpresaComponent]
})
export class AppModule { }
