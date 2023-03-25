import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from '../api/app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Modelos } from '../model/modelos';
import { Colecoes } from '../model/colecoes';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private baseUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {}
//Pegando tudo
  getModelos(): Observable<Modelos[]> {
    return this.http.get<Modelos[]>(this.baseUrl)
  }
//buscando um item especifico
  getModelo(id: string): Observable<Modelos> {
    return this.http.get<Modelos>(`${this.baseUrl}/${id}`)
  }


//Pegando tudo
  getColecoes(): Observable<Colecoes[]> {
    return this.http.get<Colecoes[]>(this.baseUrl)
  }

//Criando novo
  CriarUser(user: User){
    return this.http.post<User>(this.baseUrl, user)
  }

  // //Criando novo usuario com cabeçalho
  // CriarUserCabecalho(user: User) {
  //   const headers: any = {
  //     Authorization: 'Bearer jwt'
  //   }
  //   return this.http.post<User>(this.baseUrl, user, headers)
  // }

//Pegando tudo
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

// //Pegando tudo cabecalho
// getUser(): Observable<User[]> {
//   return this.http.get<User[]>(this.baseUrl, Headers)
// }

 //Excluir 
  ExcluirAlgo(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

   //atualizar 
   AtualizarAlgo(user: User){
    return this.http.put(`${this.baseUrl}/${user.id}`, user)
  }

}





// métodos padrões para teste
// constructor(private http: HttpClient, private router: Router) { }
  
// login(values: { email: string, password: string}) {
//   return this.http.get<User[]>(`${URL_API}/users?email_like=` + values.email);
// }

// register (user: User) {
//   return this.http.post<User>(`${URL_API}/users` , user);
// }

// clear() {
//     localStorage.clear()
//   }
// isAuthenticated() {
//     return (localStorage.getItem('user') !== null ? true : false);
// }
  
// logout() {
//     this.clear();
//     this.router.navigate(['/'])
//   }