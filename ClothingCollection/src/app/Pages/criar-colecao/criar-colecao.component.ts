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
  
  //Captura da data
    formatsDateTest: string[] = [
      'MM/yy'
    ];
  
    dateNow: Date = new Date();
    dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();


  //valores

  randonone: number;
  randontwo: number;


  randonOne(): number {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randonTwo(): number {
    const min = 1;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

 
  /////Construção das requisições
    
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
      
          // nome: ['', [Validators.required, Validators.minLength(3)]],
      
          // empresa: ['', [Validators.required, Validators.minLength(2)]],
      
          // cnpj: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(18), Validators.pattern("^[0-9]*$")]],
          
          // email: ['', [Validators.required, Validators.email, ]],
      
          // password: ['', [Validators.required, , Validators.minLength(8), Validators.maxLength(8)]],
      
          // repassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
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


  async criarColecao() {
    if (this.f.valid) {
      const colecao: Colecoes = this.f.value;
      console.log(colecao);
      await this.colecoesService.criarColecao(colecao).subscribe(resultado => {
        console.log(resultado);
      });
      alert('Cadastro successful')
      this.f.reset();
      this.getModelo()
    }
  }
 
  dadosColecoes: any[] = [];
  dadosModelos: any[] = [];
 
  numeroDeColecoes : number;
  numeroDeModelos: number;
  colecao: any;
  mediaOrcamentos: number;

  
  ngOnInit(): void {
    this.randonone = this.randonOne();
    this.randontwo = this.randonTwo();

    this.colecoesService.getColecao().subscribe(data => {
      this.dadosColecoes = data;
      this.numeroDeColecoes = this.colecoes.length;
    });

    this.modelosService.getModelo().subscribe(data => {
      this.dadosModelos = data;
      this.numeroDeModelos = this.modelos.length;
    });

   
   
  }
}

