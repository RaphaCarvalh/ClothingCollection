import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() { }

}
  
  
// //Pegando tudo
// getModelos(): Observable<Modelos[]> {
//   return this.http.get<Modelos[]>(this.baseUrl)
// }
// //buscando um item especifico
// getModelo(id: string): Observable<Modelos> {
//   return this.http.get<Modelos>(`${this.baseUrl}/${id}`)
// }


// //Pegando tudo
// getColecoes(): Observable<Colecoes[]> {
//   return this.http.get<Colecoes[]>(this.baseUrl)
// }

// //Criando novo

// criarUser(user: User): Observable<User> {
// return this.http.post<User>(`${this.baseUrl}`, user);
// }

// //Pegando tudo
// getUser(): Observable<User[]> {
//   return this.http.get<User[]>(this.baseUrl)
// }

// criarEmail(email: Email): Observable<Email> {
//   return this.http.post<Email>(`${this.baseUrl}`, email);
// } 

// getEmail(): Observable<Email[]> {
//   return this.http.get<Email[]>(this.baseUrl)
// }

// //Excluir 
// excluirUser(id: number): Observable<any> {
// return this.http.delete<any>(`${this.baseUrl}/user/${id}`);
// }
//  //atualizar 
// atualizarUser(user: User): Observable<any> {
//   return this.http.put<any>(`${this.baseUrl}/tarefas/${user.id}`, user);
// }

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
// c() {
//     return (localStorage.getItem('user') !== null ? true : false);
// }
  
  // criarUser(user: User){
  //   return this.http.post<User>(this.baseUrl, user)
  // }

  // //Criando novo usuario com cabeçalho
  // CriarUserCabecalho(user: User) {
  //   const headers: any = {
  //     Authorization: 'Bearer jwt'
  //   }
  //   return this.http.post<User>(this.baseUrl, user, headers)
  // }

// //Pegando tudo cabecalho
// getUser(): Observable<User[]> {
//   return this.http.get<User[]>(this.baseUrl, Headers)
// }

  //  logout() {
  //   this.clear();
  //   this.router.navigate(['/'])
  // }
