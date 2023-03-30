import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit{

  modelos: any[] = [];

  displayedColumns = [ 'Modeloid',
  'Nomedoproduto',
  'Responsavel',
  'Colecao']



  constructor() {
    // this.orcamentos = []
   }
  ngOnInit(): void {}
  }
  