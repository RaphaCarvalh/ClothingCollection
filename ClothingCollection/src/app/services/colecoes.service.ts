import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Colecoes } from '../model/colecoes';

@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  private baseUrl = 'http://localhost:3000/colecoes';

  constructor(private http: HttpClient, private router: Router) { }
  
  
//Criando novo
  
criarColecao(colecoes: Colecoes): Observable<Colecoes> {
  return this.http.post<Colecoes>(`${this.baseUrl}`, colecoes);
}

//Pegando tudo
getColecao(): Observable<Colecoes[]> {
    return this.http.get<Colecoes[]>(this.baseUrl)
}


getTarefa(id: string): Observable<any> {
  return this.http.get<Colecoes>(`${this.baseUrl}/colecoes/${id}`)
}
 //Excluir 
 excluirColecao(id: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/colecoes/${id}`);
}

atualizarTarefa(tarefa: Colecoes): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/colecoes/${tarefa.id}`, tarefa);
}

excluirTarefa(id: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/colecoes/${id}`);
}
  


}