import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Email } from '../../model/email';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent {
  f: FormGroup;
  form: any;
  emails: Email[] = [];
  formularioDeLogin: any;
  service: any;
  http: any;

 

  constructor(private fb: FormBuilder, private loginService: LoginService,    
    private router: Router,) {

    this.f = this.fb.group({
      name : ['', [Validators.required, Validators.email]],

    });
  }

  async criarEmail() {
    if (this.f.valid) {
      const email: Email = this.f.value;
      console.log(email);
      await this.loginService.criarEmail(email).subscribe(resultado => {
        console.log(resultado);
      });
      this.f.reset();
      window.location.href = "../senhaRedefinida";
    }
  }

  listarEmail() {
    this.loginService.getEmail().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.emails = data;
    })
  }

  onSubmit(modal: any): void {
    if (this.f.valid) {
      
      window.location.href = "../senhaRedefinida";
      alert('successful')
        
    }

  }
  onReset(): void {
    this.f.reset();
  }

  externalValidate(){
  }

}