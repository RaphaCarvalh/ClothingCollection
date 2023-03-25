import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RedefinirSenhaComponent } from './Pages/redefinir-senha/redefinir-senha.component';
import { SenhaRedefinidaComponent } from './Pages/senha-redefinida/senha-redefinida.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { HomeComponent } from './Pages/home/home.component';
import { AuthGuard } from './Guard/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent, },
  { path: 'senhaRedefinida', component: SenhaRedefinidaComponent },
  { path: 'cadastro', component: CadastroComponent },

  { path: 'home', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
