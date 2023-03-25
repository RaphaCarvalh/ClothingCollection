import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../login/usuario';
import { AuthserviceService } from 'src/app/Guard/authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class LoginComponent {
  
  f: FormGroup;
  form: any;
  public usuario: Usuario = new Usuario();


  constructor(private fb: FormBuilder) {

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,, Validators.minLength(8), Validators.maxLength(8) ]],

    });
  }

  onReset(): void {
    this.f.reset();
  }

  externalValidate(){
  }


  fazerLogin() {}
  
}
