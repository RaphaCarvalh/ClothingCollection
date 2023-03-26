import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-senha-redefinida',
  templateUrl: './senha-redefinida.component.html',
  styleUrls: ['./senha-redefinida.component.scss']
})

export class SenhaRedefinidaComponent {
  f: FormGroup;
  form: any;

  constructor(private fb: FormBuilder) {

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],

    });
  }

  onSubmit(modal: any): void {
    window.location.href = "/";
  }

  externalValidate(){
  }

}
