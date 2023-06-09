import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecoes } from 'src/app/model/colecoes';
import { Modelos } from 'src/app/model/modelos';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit { 
 
   
  colecoes: Colecoes[] = [];
  modelos: Modelos[] = [];
  f: FormGroup;
  form: any;


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router, private fb: FormBuilder) {      
        this.f = this.fb.group({
      
          colecao: ['', [Validators.required, Validators.minLength(1)]],
          estacao: ['', [Validators.required, Validators.minLength(1)]], 
          orcamento: ['', [Validators.required, Validators.minLength(1)]], 
          responsavel: ['', [Validators.required, Validators.minLength(1)]], 
          modelo: ['', [Validators.required, Validators.minLength(1)]], 
          anoLancamento: ['', [Validators.required, Validators.minLength(1)]], 

         
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

  async onSubmit(): Promise<void> { 
    
    if (this.f.valid) {
      const colecao: Colecoes = this.f.value;
      console.log(colecao);
      await this.colecoesService.criarColecao(colecao).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Criado com sucesso')
      this.f.reset();
      this.getColecao()
    }
  }
  
  onReset(): void {
    this.f.reset();
  }
  
}

