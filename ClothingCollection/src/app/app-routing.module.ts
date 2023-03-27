import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedefinirSenhaComponent } from './Pages/redefinir-senha/redefinir-senha.component';
import { SenhaRedefinidaComponent } from './Pages/senha-redefinida/senha-redefinida.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AuthGuard } from './Guard/auth.guard';
import { MenuComponent } from './Components/menu/menu.component';


const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: '', component: LoginComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent },
  { path: 'senhaRedefinida', component: SenhaRedefinidaComponent },
  { path: 'cadastro', component: CadastroComponent },


  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: 'menu', component: MenuComponent }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
