import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent implements OnInit{

  colecoes: any[] = [];
  displayedColumns = [ 'Colecao',
    'Responsavel',
    'Estacao',
    'Modelo',
    'Orcamento']




  constructor() {
    // this.orcamentos = []
   }
  ngOnInit(): void {}
  }
  


//   <table mat-table [dataSource]="colecoes" class="mat-elevation-z8">

//   <!--- Note that these columns can be defined in any order.
//         The actual rendered columns are set as a property on the row definition" -->

//   <!-- Colecao Column -->
//   <ng-container matColumnDef="Colecao">
//     <th mat-header-cell *matHeaderCellDef> Coleção </th>
//     <td mat-cell *matCellDef="let colecoes"> {{colecoes.position}} </td>
//   </ng-container>

//   <!-- Responsavel Column -->
//   <ng-container matColumnDef="Responsavel">
//     <th mat-header-cell *matHeaderCellDef> Responsável </th>
//     <td mat-cell *matCellDef="let colecoes"> {{colecoes.Responsavel}} </td>
//   </ng-container>

//   <!-- Estacao Column -->
//   <ng-container matColumnDef="Estacao">
//     <th mat-header-cell *matHeaderCellDef> Estação </th>
//     <td mat-cell *matCellDef="let colecoes"> {{colecoes.Estacao}} </td>
//   </ng-container>

//   <!-- Modelo Column -->
//   <ng-container matColumnDef="Modelo">
//     <th mat-header-cell *matHeaderCellDef> Modelo </th>
//     <td mat-cell *matCellDef="let colecoes"> {{colecoes.Modelo}} </td>
//   </ng-container>

//  <!-- Orcamento Column -->
//  <ng-container matColumnDef="Orcamento">
//   <th mat-header-cell *matHeaderCellDef> Orçamento </th>
//   <td mat-cell *matCellDef="let colecoes"> {{colecoes.Orcamento}} </td>
// </ng-container>

//   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
//   <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
// </table>

