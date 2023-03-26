import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class LoginComponent {
  
  f: FormGroup;
  form: any;
  loginService: any;


  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar) {

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, , Validators.minLength(8), Validators.maxLength(8)]],
    });
  }

// validar se será necessário
  // ngOnInit(): void {
  //   this.criarForm();
  // }
  // criarForm(){
  //   this.formLogin = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     senha: ['', [Validators.required]]
  //   });
  // }

  onReset(): void {
    this.f.reset();
  }

  externalValidate() {}

  onSubmit() {}
  
  
  logar() {
    if (this.f.invalid) return;
    var usuario = this.f.getRawValue() as User;
    this.usuarioService.logar(usuario).subscribe((response) => {
      if (!response.sucesso) {
        this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
          duration: 3000
        });
      }
    })
  }
}





  // // this.httpUsuario.validarUsuario().subscribe((data)=> {
  //   let logado = false;
  //   data.map(value => {
  //     if ((value.email === email && value.senha === senha)) {
  //       this.logarUsuario();
  //       logado = true;
  //       return
  //     }
  //   })
  //   if (!logado) {
  //     alert("Nenhum Usuario Encontrado");
  //   }
  // })


  // fazerLogin() {
  //   if(this.f.valid){
  //     this.loginService.validarUsuario().subscribe((data)=> {
  //     let logado = false;
  //     data.map(value => {
  //       if ((value.email === email && value.senha === senha)) {
  //         this.logarUsuario();
  //         logado = true;
  //         return
  //       }
  //     })
  //     if (!logado) {
  //       alert("Nenhum Usuario Encontrado");
  //     }
  //   })

  //    if (!data) {
  //           alert('erro')
  //           return;
  //         }
  //         this.User = data;
  //       })

  //       console.log(this.f.getRawValue())


  //         if (dataServer.length > 0) {
  //           if (dataLogin.password == dataServer[0].password) {
  //             alert('pode logar')
  //         }else{
  //             alert('não pode logar')
  //           }
  //         } else {
  //           alert('Usuário não cadastrado')
  //         }
  //         // console.log(dataServer);
  //       }
  //   )
