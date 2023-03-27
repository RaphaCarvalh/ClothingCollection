import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedefinirSenhaComponent } from './Pages/redefinir-senha/redefinir-senha.component';
import { SenhaRedefinidaComponent } from './Pages/senha-redefinida/senha-redefinida.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { UsuarioAutenticadoGuard } from './Guard/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './Guard/usuario-nao-autenticado.guard';
import { LoginComponent } from './Pages/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '', component: LoginComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent },
  { path: 'senhaRedefinida', component: SenhaRedefinidaComponent },
  { path: 'cadastro', component: CadastroComponent },
  
  // {
  //   path: 'home', component: CadastroComponent, 
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent }
  //   ],
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
