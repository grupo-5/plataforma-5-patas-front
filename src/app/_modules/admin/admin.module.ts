import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './../../_shared/shared.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { CadastroDepoimentosComponent } from './pages/pessoa/cadastro-depoimentos/cadastro-depoimentos.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';
import { DashboardComponent } from './pages/instituicao/dashboard.component';
import { ListagemAnimaisComponent } from './pages/instituicao/listagem-animais/listagem-animais.component';
import { ListagemUsuariosComponent } from './pages/instituicao/listagem-usuarios/listagem-usuarios.component';
import { AnimalCreateP3Component } from './pages/instituicao/animal-create-p3/animal-create-p3.component';
import { DashboardPessoaComponent } from './pages/pessoa/dashboard-pessoa.component';
import { ListagemSolicitacoesComponent } from './pages/instituicao/listagem-solicitacoes/listagem-solicitacoes.component';

@NgModule({
  declarations: [
    AdminComponent,
    AnimalCreateComponent,
    DashboardComponent,
    AnimalCreateP2Component,
    CadastroDepoimentosComponent,
    ListagemAnimaisComponent,
    AnimalCreateP3Component,
    ListagemUsuariosComponent,
    DashboardPessoaComponent,
    ListagemSolicitacoesComponent,
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    AnimalCreateComponent,
    CadastroDepoimentosComponent,
    AnimalCreateP2Component,
    DashboardComponent,
    ListagemAnimaisComponent,
    ListagemUsuariosComponent,
    AnimalCreateP3Component,
    DashboardPessoaComponent,
    ListagemSolicitacoesComponent
  ],
})
export class AdminModule {}
