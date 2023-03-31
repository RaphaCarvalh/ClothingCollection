import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CollectItem {
  colecao: string; 
  responsavel: string;
  estacao: string;
  modelo: number;
  orcamento: number;
  id: number;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CollectItem[] = [
 
  { id: 2, colecao: 'Coleção Outono/Inverno', responsavel: 'Pedro Oliveira', estacao: 'Verão', modelo: 2022, orcamento: 6000 },
  { id: 1, colecao: 'Coleção Primavera/Verão', responsavel: 'Mariana Costa', estacao: 'inverno', modelo: 2022, orcamento: 3000 },
  { id: 3, colecao: 'Coleção Praia', responsavel: 'Lucas Santos', estacao: 'Primavera', modelo: 2022, orcamento: 6000 },
  { id: 4, colecao: 'Coleção Outono/Inverno', responsavel: 'Pedro Oliveira', estacao: 'Verão', modelo: 2022, orcamento: 4500 },
  { id: 5, colecao: 'Coleção Esporte', responsavel: 'Pedro Oliveira', estacao: 'inverno', modelo: 2022, orcamento: 6000 },
  { id: 6, colecao: 'Coleção Praia', responsavel: 'Lucas Santos', estacao: 'inverno', modelo: 2022, orcamento: 3500 },
  { id: 7, colecao: 'Coleção Outono/Inverno', responsavel: 'Pedro Oliveira', estacao: 'inverno', modelo: 2022, orcamento: 8000 },
  { id: 8, colecao: 'Coleção Esporte', responsavel: 'Mariana Costa', estacao: 'Verão', modelo: 2022, orcamento: 3000 },
  { id: 2, colecao: 'Coleção Outono/Inverno', responsavel: 'Lucas Santos', estacao: 'Primavera', modelo: 2022, orcamento: 3500 },
  { id: 9, colecao: 'Coleção Praia', responsavel: 'Pedro Oliveira', estacao: 'inverno', modelo: 2022, orcamento: 4500 },
 

];

/**
 * Data source for the Collect view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CollectDataSource extends DataSource<CollectItem> {
  data: CollectItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CollectItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CollectItem[]): CollectItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CollectItem[]): CollectItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'orcamento': return compare(a.orcamento, b.orcamento, isAsc);
        case 'colecao': return compare(+a.colecao, +b.colecao, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
