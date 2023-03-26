import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RedefinirSenhaComponent } from './Pages/redefinir-senha/redefinir-senha.component';
import { SenhaRedefinidaComponent } from './Pages/senha-redefinida/senha-redefinida.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { UsuarioAutenticadoGuard } from './Guard/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './Guard/usuario-nao-autenticado.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent, },
];
  // 
  // 
  // { path: 'senhaRedefinida', component: SenhaRedefinidaComponent },
  // { path: 'cadastro', component: CadastroComponent },


  // // { path: '', component: LoginComponent},
  // // {
  // //   path: 'home', component: HomeComponent, canActivate: [UsuarioAutenticadoGuard],
  // //   children: [
  // //     { path: 'dashboard', component: DashboardComponent }
  // //   ],
  // // },





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
