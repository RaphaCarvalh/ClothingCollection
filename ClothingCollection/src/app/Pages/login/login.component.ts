import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { Usuario } from '../login/usuario';

import { CadastroService } from 'src/app/services/cadastro.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class LoginComponent implements OnInit{
  
  f: FormGroup;
  form: any;
  loginService: any;
  users: User[] = [];
  email: any;
  senha: any;

  public usuario: Usuario = new Usuario();


  constructor(private cadastroService: CadastroService,
    private router: Router,
    private fb: FormBuilder,
    public  authService : AuthService) { }
  
  ngOnInit(): void {
    this.f = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
    this.listarUsers();
  }

  
  // listarUsers() {
  //   this.cadastroService.getUser().subscribe(data => {
  //     if (!data) {
  //       alert('erro')
  //       return;
  //     }
  //     this.users = data;
  //   })
  // }

  listarUsers() { }
   

  async criarUser() {
    if (this.f.valid) {
      const user: User = this.f.value;
      console.log(user);
      await this.cadastroService.criarUser(user).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Cadastro successful')
      this.f.reset();
      this.listarUsers()
    }
  }

  async onSubmit(): Promise<void> {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario)
   
  }
  
  onReset(): void {
    this.f.reset();
  }

  // fazerLogin() {
  //   console.log(this.usuario);
  //   this.authService.fazerLogin(this.usuario)
   
  // }

  
}


    // console.log(this.usuario);
    // this.authService.fazerLogin(this.usuario);