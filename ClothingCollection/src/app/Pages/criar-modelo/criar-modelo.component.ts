import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecoes } from 'src/app/model/colecoes';
import { Modelos } from 'src/app/model/modelos';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent implements OnInit {

 
  /////Construção das requisições
    
  colecoes: Colecoes[] = [];

  modelos: Modelos[] = [];

  colect: any;
  f: FormGroup;
  form: any;


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router, private fb: FormBuilder) {      
        this.f = this.fb.group({
      
          nome: ['', [Validators.required, Validators.minLength(3)]],     
         
        })
    this.getColecao();
    this.getModelo();    
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


  ngOnInit(): void {     
  }
 
  async onSubmit(): Promise<void> { 
    
    if (this.f.valid) {
      const _modelos: Modelos = this.f.value;
      console.log(_modelos);
      await this.modelosService.criarModelo(_modelos).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Cadastro successful')
      this.f.reset();
      this.getModelo()
    }
  }
  
  onReset(): void {
    this.f.reset();
  }
  
}

