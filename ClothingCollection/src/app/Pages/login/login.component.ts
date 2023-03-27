import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class LoginComponent {
  
  f: FormGroup;
  form: any;
  loginService: any;
  users: User[] = [];
  email: any;
  senha: any;


  constructor(private cadastroService: CadastroService,
    private router: Router,
    private fb: FormBuilder) { }
  
    ngOnInit(): void {
    this.f = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
    this.listarUsers();
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

  //   listarUsers() {
  //   this.cadastroService.getUser().subscribe(data => {
  //     let logado = false;
  //     data.map(value => {
  //       if ((value.email === email && value.senha === senha)) {
  //         this.logarUsuario();
  //         logado = true;
  //         return
  //       }
  //     })
  //     if (!logado) {
  //       alert("Nenhum Usuário Encontrado")
  //     }
  // })
  
  // }

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
  onReset(): void {
    this.f.reset();
  }

  
}