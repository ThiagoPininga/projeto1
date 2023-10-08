import { Component } from '@angular/core';
import { SenhaService } from '../senha.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private senhaService: SenhaService) {}

  gerarGeral() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear().toString().slice(-2);
    const mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    const dia = ('0' + dataAtual.getDate()).slice(-2);
    const tipoSenha = 'GE'; // Tipo de senha geral
    const sequenciaSenha = this.senhaService.obterProximaSequencia(); // Obtém a próxima sequência

    const senha = `${ano}${mes}${dia}-${tipoSenha}${sequenciaSenha}`;

    this.senhaService.adicionarSenha(senha);
  }
}
