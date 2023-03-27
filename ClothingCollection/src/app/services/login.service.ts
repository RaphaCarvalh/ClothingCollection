import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Email } from '../model/email';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:3000/email';

  constructor(private http: HttpClient, private router: Router) { }
  
  


//Pegando tudo
 
  criarEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(`${this.baseUrl}`, email);
  } 

  getEmail(): Observable<Email[]> {
    return this.http.get<Email[]>(this.baseUrl)
  }

 //Excluir 
// //  excluirEmail(id: number | string): Observable<any> {
// //   return this.http.delete<any>(`${this.baseUrl}/email/${id}`);
// }
   //atualizar 
 atualizarEmail(email: Email): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/tarefas/${email.id}`, email);
  }
  
   excluirEmail(id: number | string){
  return this.http.delete(`${this.baseUrl}/${id}`)
}
}
