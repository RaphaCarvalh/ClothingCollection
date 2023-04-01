import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecoes } from 'src/app/model/colecoes';
import { Modelos } from 'src/app/model/modelos';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.scss']
})
  

export class EditarModeloComponent implements OnInit {

   
 
  colecoes: Colecoes[] = [];
  modelos: Modelos[] = [];
  colect: any;
  f: FormGroup;
  form: any;
  formularioDeLogin: any;
  service: any;
  http: any;
  


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router, private fb: FormBuilder) {      
        this.f = this.fb.group({
      
          nome: ['', [Validators.required, Validators.minLength(3)]],     
         
        })
    this.getColecao();
    this.getModelo();    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  getColecao() {
    this.colecoesService.getColecao().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.colecoes = data;
    })
  }
  
  getModelo() {
    this.modelosService.getModelo().subscribe(data => {
      if (!data) {
        alert('erro')
        return;
      }
      this.modelos = data;
    })
  }


  async criarColecao() {
    if (this.f.valid) {
      const colecao: Colecoes = this.f.value;
      console.log(colecao);
      await this.colecoesService.criarColecao(colecao).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Cadastro successful')
      this.f.reset();
      this.getColecao()
    }
  }


  onSubmit(): void { };
  
  onReset(): void {
    this.f.reset();
  }
  
}

