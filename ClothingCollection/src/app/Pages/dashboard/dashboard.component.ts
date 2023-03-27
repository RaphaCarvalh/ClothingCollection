import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{

  constructor() { }
  
}



//menu protegido pelo rota atraves do emitter

// mostrarMenu: boolean = false;

// constructor(private authService: AuthService) {

// }

// ngOnInit(){
//   this.authService.mostrarMenuEmitter.subscribe(
//     mostar => this.mostrarMenu = mostrar
  
//   );
// }


////
// na parte do html adicionar um *ngIf="mostrarMenu" dentro da nav