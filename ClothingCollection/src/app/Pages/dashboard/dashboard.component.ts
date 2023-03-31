import { Component, OnInit } from '@angular/core';
import { map, max } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Colecoes } from 'src/app/model/colecoes';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Router } from '@angular/router';
import { ModelosService } from 'src/app/services/modelos.service';
import { Modelos } from 'src/app/model/modelos';
import { min } from 'rxjs-compat/operator/min';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  //Captura da data
    formatsDateTest: string[] = [
      'MM/yy'
    ];
  
    dateNow: Date = new Date();
    dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();


  //valores

  randonone: number;
  randontwo: number;


  randonOne(): number {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randonTwo(): number {
    const min = 1;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

 
  /////Construção das requisições
    
  colecoes: Colecoes[] = [];

  modelos: Modelos[] = [];
  


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router) {
    // this.orcamentos = []
    this.getColecao();
    this.getModelo();
  }
  
  getColecao() {
    this.colecoesService.getColecao().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.colecoes = data;
    })
  }
  
  getModelo() {
    this.modelosService.getModelo().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.modelos = data;
    })
  }


//testando requisição
  
// meuArrayJson: any[] = [
//   { id: 1, nome: "Objeto 1" },
//   { id: 2, nome: "Objeto 2" },
//   { id: 3, nome: "Objeto 3" },
  // ...
// ];
  
  dadosColecoes: any[] = [];
  dadosModelos: any[] = [];
 
  numeroDeColecoes : number;
  numeroDeModelos : number;

  
  ngOnInit(): void {
    this.randonone = this.randonOne();
    this.randontwo = this.randonTwo();

    this.colecoesService.getColecao().subscribe(data => {
      this.dadosColecoes = data;
      this.numeroDeColecoes = this.colecoes.length;
    });

    this.modelosService.getModelo().subscribe(data => {
      this.dadosModelos = data;
      this.numeroDeModelos = this.modelos.length;
    });
  }
}
  
 

  