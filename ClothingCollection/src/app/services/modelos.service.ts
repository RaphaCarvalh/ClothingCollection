import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Modelos } from '../model/modelos';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  
  private baseUrl = 'http://localhost:3000/modelos';

  constructor(private http: HttpClient, private router: Router) { }
  
  
//Criando novo
  
criarModelo(modelos: Modelos): Observable<Modelos> {
  return this.http.post<Modelos>(`${this.baseUrl}`, modelos);
}

//Pegando tudo
  getModelo(): Observable<Modelos[]> {
    return this.http.get<Modelos[]>(this.baseUrl)
  }

 //Excluir 
 excluirModelo(id: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/modelos/${id}`);
}

}