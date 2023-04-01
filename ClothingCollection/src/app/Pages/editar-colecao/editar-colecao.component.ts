import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colecoes } from 'src/app/model/colecoes';
import { Modelos } from 'src/app/model/modelos';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.scss']
})
export class EditarColecaoComponent implements OnInit { 
 
  colecaoId: any = '';
  colecaO!: any | Colecoes;

  colecoes: Colecoes[] = [];
  modelos: Modelos[] = [];
  
  f: FormGroup;
  form: any;

  colecaow: Colecoes[] = [];

  tarefaId: any = '';
  tarefa!: any | Colecoes;



  constructor(private colecoesService: ColecoesService, private modelosService: ModelosService,
    private router: Router, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {      
        this.f = this.fb.group({
      
          colecao: ['', [Validators.required, Validators.minLength(3)]],
          estacao: ['', [Validators.required, Validators.minLength(3)]], 
          orcamento: ['', [Validators.required, Validators.minLength(3)]], 
          responsavel: ['', [Validators.required, Validators.minLength(3)]], 
          modelo: ['', [Validators.required, Validators.minLength(3)]], 
          anoLancamento: ['', [Validators.required, Validators.minLength(3)]], 

         
        })
    this.getColecao();
    this.getModelo();    
  }



  ngOnInit(): void {
    this.colecaoId = this.activatedRoute.snapshot.paramMap.get('id')    
    this.getColecao()    
  }

  async getTarefa() {    
    if (this.colecaoId == null) {
      return;
    }
    this.colecoesService.getTarefa(this.colecaoId).toPromise().then((data)=> {
      this.colecaO = data;
      alert(`Colecao aberta: ${this.colecaO.titulo}`)
    })    
  }
  //////////////////////////////////////////////////////////////

  listarTarefas() {
    this.colecoesService.getColecao().subscribe(data => {
      this.colecoes = data;
    })
  }

  async criarTarefa() {
    const tarefa: Colecoes = this.f.value;
    
    await this.colecoesService.criarColecao(tarefa);
    this.listarTarefas()
  }

  editarTarefa(_colecoes: Colecoes) {
    this.router.navigate([`/colecoes/${_colecoes.id}`])
  }

  async excluirTarefa(tarefa: Colecoes) {
    this.colecoesService.excluirTarefa(tarefa.id).toPromise().then(() => {
      this.listarTarefas()
    }, err => {
      console.log(err)
    })    
  }



  ///////////////////////////////////////////////////////////////////
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

  // async deletaColecao(colecaow: Colecoes) {
  //   this.colecoesService.excluirTarefa(colecaow.id).toPromise().then(() => {
  //     this.excluirTarefa()
  //     window.location.href = "/";
  //   }, err => {
  //     console.log(err)
  //   })    
  // }


  // async criarColecao() {
  //   if (this.f.valid) {
  //     const colecao: Colecoes = this.f.value;
  //     console.log(colecao);
  //     await this.colecoesService.criarColecao(colecao).subscribe(resultado => {
  //       console.log(resultado);
  //     });
  //     alert('Cadastro successful')
  //     this.f.reset();
  //     this.getColecao()
  //   }
  // }

  async onSubmit(): Promise<void> { 
    
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
  
  onReset(): void {
    this.f.reset();
  }
  
}

{

}
