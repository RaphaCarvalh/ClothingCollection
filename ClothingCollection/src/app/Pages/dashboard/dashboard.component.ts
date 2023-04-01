import { Component, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/model/colecoes';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Router } from '@angular/router';
import { ModelosService } from 'src/app/services/modelos.service';
import { Modelos } from 'src/app/model/modelos';



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
  sort: any;


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
  colect: any;
  totalOrcamentos = 0;

  


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router) {
    this.getColecaO();
    this.getModelo();
    
  }
  
  getColecaO() {
    this.colecoesService.getColecao().subscribe(data => {
      if (!data) {
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
 
  dadosColecoes: any[] = [];
  dadosModelos: any[] = [];
 
  numeroDeColecoes: number;
  numeroDeModelos: number;
  colecao: any;
  mediaOrcamentos: number;
  orcamentoS: any[];

  
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