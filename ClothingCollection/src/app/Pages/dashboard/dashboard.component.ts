import { Component, OnInit } from '@angular/core';
import { map, max } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Colecoes } from 'src/app/model/colecoes';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Router } from '@angular/router';
import { ModelosService } from 'src/app/services/modelos.service';
import { Modelos } from 'src/app/model/modelos';
import { min } from 'rxjs-compat/operator/min';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, of as observableOf, merge } from 'rxjs';


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
  


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router) {
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
 
  dadosColecoes: any[] = [];
  dadosModelos: any[] = [];
 
  numeroDeColecoes : number;
  numeroDeModelos: number;
  colecao: any;
  mediaOrcamentos: number;

  
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



  private getSortedData(data: Colecoes[]): Colecoes[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'orcamentos': return compare(a.orcamento, b.orcamento, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}



  
 


function compare(arg0: number, arg1: number, isAsc: boolean): number {
  throw new Error('Function not implemented.');
}
  