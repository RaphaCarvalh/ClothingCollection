import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from 'src/app/model/email';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-senha-redefinida',
  templateUrl: './senha-redefinida.component.html',
  styleUrls: ['./senha-redefinida.component.scss']
})

export class SenhaRedefinidaComponent implements OnInit{
  f: FormGroup;
  form: any;
  emails: Email[] = [];
  user: any;

  constructor(private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.f = this.fb.group({

      name: ['', [Validators.required, Validators.email]],

    });
    this.listarEmails();
  }
  

  onSubmit(modal: any): void {
   
  }

  externalValidate() {
    window.location.href = "/";
  }

   listarEmails() {
    this.loginService.getEmail().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.emails = data;
    })
   }
  
   async criarEmail() {
    if (this.f.valid) {
      const email: Email = this.f.value;
      console.log(email);
      await this.loginService.criarEmail(email).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Cadastro successful')
      this.listarEmails()
    }
   }
  
  //  async deletaEmail(email:Email) {
  //    await this.loginService.excluirEmail(email.id).toPromise()
     
  //    this.listarEmails()
  //   }

  async deletaEmail(email: Email) {
    this.loginService.excluirEmail(email.id).toPromise().then(() => {
      this.listarEmails()
      window.location.href = "/";
    }, err => {
      console.log(err)
    })    
  }

  }

