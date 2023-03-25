import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import { URL_API } from 'src/app/api/app.api';
import { User } from 'src/app/model/user';
import { CadastroService } from 'src/app/services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  f: FormGroup;
  form: any;
  formularioDeLogin: any;
  service: any;
  http: any;
 

  constructor(private fb: FormBuilder) {

    this.f = this.fb.group({

      nome: ['', [Validators.required, Validators.minLength(3)]],

      cnpj: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(18), Validators.pattern("^[0-9]*$")]],
      
      name: ['', [Validators.required, Validators.email, Validators.pattern]],

      password: ['', [Validators.required, , Validators.minLength(8), Validators.maxLength(8)]],

      repassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    });
  }

  onSubmit(modal: any): void {
    if (this.f.valid) {
      console.log(this.f.getRawValue());
      alert('Cadastro successful')
      this.f.reset();  
      
    } else {

      let temp = this.f.controls['name'];
      console.log('the controls', this.f.controls);
      console.log('name form', temp);
      Object.keys(this.f.controls).forEach(key => {
        this.f.get(key).markAsTouched();
      });
    }

  }

  onReset(): void {
    this.f.reset();
  }

  externalValidate() {
    
  }

  data = {
    password: '',
    password_confirm: '',
  };
}
  

