import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Pages/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public usuarioAutenticado: boolean = false;

  constructor(public  router: Router) { }
  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {
      
      this.usuarioAutenticado = true;
      
      this.router.navigate(['/homeDois']);

      } else {
        this.usuarioAutenticado = false;
      }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}