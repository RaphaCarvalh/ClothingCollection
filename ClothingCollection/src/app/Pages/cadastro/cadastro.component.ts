import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  f: FormGroup;
  form: any;
  formularioDeLogin: any;
  service: any;
  http: any;
  users: User[] = [];

  constructor(private cadastroService: CadastroService,    
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.f = this.fb.group({

      nome: ['', [Validators.required, Validators.minLength(3)]],

      empresa: ['', [Validators.required, Validators.minLength(2)]],

      cnpj: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(18), Validators.pattern("^[0-9]*$")]],
      
      email: ['', [Validators.required, Validators.email, ]],

      password: ['', [Validators.required, , Validators.minLength(8), Validators.maxLength(8)]],

      repassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    })
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

  data = {
    password: '',
    password_confirm: '',
  };

  externalValidate() {
    
  }


  }

  

