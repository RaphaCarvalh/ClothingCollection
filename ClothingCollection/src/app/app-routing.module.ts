import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedefinirSenhaComponent } from './Pages/redefinir-senha/redefinir-senha.component';
import { SenhaRedefinidaComponent } from './Pages/senha-redefinida/senha-redefinida.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AuthGuard } from './Guard/auth.guard';
import { ColecoesComponent } from './Pages/colecoes/colecoes.component';
import { ModelosComponent } from './Pages/modelos/modelos.component';
import { CriarColecaoComponent } from './Pages/criar-colecao/criar-colecao.component';
import { EditarColecaoComponent } from './Pages/editar-colecao/editar-colecao.component';
import { CriarModeloComponent } from './Pages/criar-modelo/criar-modelo.component';
import { EditarModeloComponent } from './Pages/editar-modelo/editar-modelo.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent },
  { path: 'senhaRedefinida', component: SenhaRedefinidaComponent },
  { path: 'cadastro', component: CadastroComponent },


  {
    // path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    path: 'dashboard', component: DashboardComponent},
      { path: 'colecoes', component: ColecoesComponent },
      { path: 'modelos', component: ModelosComponent },
      { path: 'criar-colecao', component: CriarColecaoComponent },
      { path: 'editar-colecao', component: EditarColecaoComponent },
      { path: 'criar-modelo', component: CriarModeloComponent },
      { path: 'editar-modelo', component: EditarModeloComponent },
    ]
  


  // { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard],
  //   children: [
   


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
