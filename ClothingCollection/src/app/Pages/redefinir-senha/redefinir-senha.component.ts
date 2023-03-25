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

  externalValidate(){
  }

}
