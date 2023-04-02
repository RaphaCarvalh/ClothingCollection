import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  modeloss: Observable<Modelos[]>;

  colect: any;
  f: FormGroup;
  form: any;


  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router, private fb: FormBuilder) {      
        this.f = this.fb.group({
      
          nomedoproduto: ['', [Validators.required,]],
          responsavel: ['', [Validators.required,]],
          colecao: ['', [Validators.required]],     
         
        })
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


  ngOnInit() {
    // this.modelosService.getModelo().subscribe(dados => {
    //   this.modeloss = dados;
    //   console.log(dados);
    // })
    this.modeloss = this.modelosService.getModelo();
  }
  
 
  async onSubmit(): Promise<void> { 
    
    if (this.f.valid) {
      const modelitos: Modelos = this.f.value;
      console.log(modelitos);
      await this.modelosService.criarModelo(modelitos).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Criado com sucesso')
      this.f.reset();
      this.getModelo()
      console.log(modelitos);

    }
  }

  
  
  onReset(): void {
    this.f.reset();
  }
  
}

