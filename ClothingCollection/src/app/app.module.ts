import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MenuComponent } from './Components/menu/menu.component';
import { ButtonsModule }from 'ngx-bootstrap/buttons';
import { RedefinirSenhaComponent } from './Pages/redefinir-senha/redefinir-senha.component';
import { SenhaRedefinidaComponent } from './Pages/senha-redefinida/senha-redefinida.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { LoginService } from './services/login.service';
import { CadastroService } from './services/cadastro.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './Guard/auth.guard';
import { ColecoesComponent } from './Pages/colecoes/colecoes.component';
import { ModelosComponent } from './Pages/modelos/modelos.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TotalColecaoComponent } from './cards/total-colecao/total-colecao.component';
import { MediaPOrcolecaoComponent } from './cards/media-porcolecao/media-porcolecao.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuTopoComponent } from './Components/menu-topo/menu-topo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    CadastroComponent,
    DashboardComponent,
    RedefinirSenhaComponent,
    SenhaRedefinidaComponent,
    MenuComponent,
    ColecoesComponent,
    ModelosComponent,
    TotalColecaoComponent,
    MediaPOrcolecaoComponent,
    NavbarComponent,
    MenuTopoComponent
  ],

  imports: [
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CollapseModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
    

  ],
  providers: [AuthService,LoginService, CadastroService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
