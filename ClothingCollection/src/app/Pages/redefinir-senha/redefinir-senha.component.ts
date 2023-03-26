import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent {
  f: FormGroup;
  form: any;

  constructor(private fb: FormBuilder) {

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],

    });
  }

  onSubmit(modal: any): void {
    if (this.f.valid) {
      
      window.location.href = "../senhaRedefinida";
      // alert('successful')
        
    }

  }
  onReset(): void {
    this.f.reset();
  }

  externalValidate(){
  }

}