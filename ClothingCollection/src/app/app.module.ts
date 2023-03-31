import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CollectComponent } from './Components/collect/collect.component';
import { ModelsComponent } from './Components/models/models.component';
import { ModelosService } from './services/modelos.service';
import { ColecoesService } from './services/colecoes.service';
import { CriarColecaoComponent } from './Pages/criar-colecao/criar-colecao.component';
import { EditarColecaoComponent } from './Pages/editar-colecao/editar-colecao.component';
import { EditarModeloComponent } from './Pages/editar-modelo/editar-modelo.component';
import { CriarModeloComponent } from './Pages/criar-modelo/criar-modelo.component';







@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    CadastroComponent,
    DashboardComponent,
    RedefinirSenhaComponent,
    SenhaRedefinidaComponent,
    ColecoesComponent,
    ModelosComponent,
    TotalColecaoComponent,
    MediaPOrcolecaoComponent,
    MenuTopoComponent,
    CollectComponent,
    ModelsComponent,
    CriarColecaoComponent,
    EditarColecaoComponent,
    EditarModeloComponent,
    CriarModeloComponent,
    
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
    MatMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    FormsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  
    

  ],
  providers: [AuthService,LoginService, CadastroService, AuthGuard, ModelosService, ColecoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
