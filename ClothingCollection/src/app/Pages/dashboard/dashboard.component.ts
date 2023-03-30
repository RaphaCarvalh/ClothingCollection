import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Colecoes } from 'src/app/model/colecoes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  colecoes: Colecoes[] = [
    { colecao: 'string', responsavel: 'string',estacao: 'string', modelo: 'string', orcamento: 'string'}
  ];

  displayedColumns = [ 'Colecao',
    'Responsavel',
    'Modelo',
    'Orcamento']





  constructor() {
    // this.orcamentos = []
   }
  ngOnInit(): void {} 
  }
  











  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );


//   <table mat-table [dataSource]="colecoes" class="mat-elevation-z8">

//   <!--- Note that these columns can be defined in any order.
//         The actual rendered columns are set as a property on the row definition" -->

//   <!-- Position Column -->
//   <ng-container matColumnDef="Colecao">
//     <th mat-header-cell *matHeaderCellDef> Coleção </th>
//     <td mat-cell *matCellDef="let colecoes"> {{ colecoes.Colecao }} </td>
//   </ng-container>

//   <!-- Name Column -->
//   <ng-container matColumnDef="Responsavel">
//     <th mat-header-cell *matHeaderCellDef> Reponsável </th>
//     <td mat-cell *matCellDef="let colecoes"> {{ colecoes.Responsavel }} </td>
//   </ng-container>

//   <!-- Weight Column -->
//   <ng-container matColumnDef="Modelos">
//     <th mat-header-cell *matHeaderCellDef> Modelos </th>
//     <td mat-cell *matCellDef="let colecoes"> {{colecoes.Modelo}} </td>
//   </ng-container>

//   <!-- Symbol Column -->
//   <ng-container matColumnDef="Orcamento">
//     <th mat-header-cell *matHeaderCellDef> Orçamento </th>
//     <td mat-cell *matCellDef="let colecoes"> {{colecoes.Orcamento}} </td>
//   </ng-container>

//   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
//   <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
// </table>