import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent {
  title = 'angularbootstrap';
  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}


