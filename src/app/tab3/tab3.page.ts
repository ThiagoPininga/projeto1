import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  alunos: any[] = [{
    nome: "Leonardo Luiz Guedes Coelho",
    matricula: "01515698"
  },
  {
    nome: "Pedro Henrique Feitosa da Silva",
    matricula: "01516541"
  },
  {
    nome: "Marcos Duarte Vieira da Silva",
    matricula: "01524163"
  },
  {
    nome: "Thiago Pininga Tavares",
    matricula: "01525716"
  }]

  constructor() {}

}
