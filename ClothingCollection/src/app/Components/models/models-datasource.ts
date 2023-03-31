import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ModelsItem {
  nomedoproduto: string; 
  responsavel: string;
  colecao: number;  
  modeloid: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ModelsItem[] = [
 
  { modeloid: 1, nomedoproduto: 'Camiseta Básica', responsavel: 'Pedro Oliveira', colecao: 3},
  { modeloid: 2, nomedoproduto: 'lusa de Frio', responsavel: 'Mariana Costa', colecao: 2},
  { modeloid: 3, nomedoproduto: 'Calça Jeans', responsavel: 'Pedro Oliveira', colecao: 1},
  { modeloid: 4, nomedoproduto: 'lusa de Frio', responsavel: 'Pedro Oliveira', colecao:3 },
  { modeloid: 5, nomedoproduto: 'Calça Jeans', responsavel: 'Mariana Costa', colecao: 6},
  { modeloid: 6, nomedoproduto: 'Camiseta Básica', responsavel: 'Pedro Oliveira', colecao: 8},
  { modeloid: 7, nomedoproduto: 'lusa de Frio', responsavel: 'PMariana Costa', colecao: 7},
  { modeloid: 8, nomedoproduto: 'Camiseta Básica', responsavel: 'Pedro Oliveira', colecao: 9},
  { modeloid: 9, nomedoproduto: 'Calça Jeans', responsavel: 'Mariana Costa', colecao: 1},
  { modeloid: 10, nomedoproduto: 'Camiseta Básica', responsavel: 'Pedro Oliveira', colecao: 5} 

];

/**
 * Data source for the Models view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ModelsDataSource extends DataSource<ModelsItem> {
  data: ModelsItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ModelsItem[]> {
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
  private getPagedData(data: ModelsItem[]): ModelsItem[] {
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
  private getSortedData(data: ModelsItem[]): ModelsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.modeloid, b.modeloid, isAsc);
        case 'id': return compare(+a.colecao, +b.colecao, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
