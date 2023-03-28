import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Pages/login/usuario';
import { User } from '../model/user';
import { CadastroService } from './cadastro.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public usuarioAutenticado: boolean = false;
  
  mostrarMenuEmitter = new EventEmitter<boolean>();
  users: User[] = [];


  constructor(public router: Router,
    private cadastroService: CadastroService,
  ) { }
  fazerLogin(usuario: Usuario) {
    this.cadastroService.getUser().subscribe(data => {
      let logado = false;
      console.log(this.users)
      data.map(value => {
        if ((usuario.email === value.email &&
          usuario.password === value.password)) {

          // if (usuario.email === "usuario@email.com" &&
          //   usuario.password === '12345678') {
      
          this.usuarioAutenticado = true;

          this.mostrarMenuEmitter.emit(true);
      
          this.router.navigate(['/dashboard']);

        } else {
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
        }
      }
      )
    }
    )}


  

usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  listarUsers() {
    this.cadastroService.getUser().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.users = data;
    })
  }
}


// 
//       // this.logarUsuario();
//       logado = true;
//       return
//     }
//   })
//   if (!logado) {
//     alert("Nenhum Usuário Encontrado")
//   }
// })

/////////////////////////////////////////////////////////////
    // if (usuario.email === "usuario@email.com" &&
    //   usuario.password === '12345678') {
      
    //   this.usuarioAutenticado = true;

    //   this.mostrarMenuEmitter.emit(true);
      
    //   this.router.navigate(['/dashboard']);

    //   } else {
    //   this.usuarioAutenticado = false;
    //   this.mostrarMenuEmitter.emit(false);
    //   }