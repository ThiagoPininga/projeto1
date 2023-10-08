import { Component } from '@angular/core';
import { SenhaService } from '../senha.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  senhasChamadas: any[] = []
  constructor(private senhaService: SenhaService) {}

  gerarSenhaPrioritaria() {
    const senha = {
      tipo: 'accessibility',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: ''
    };

    this.senhaService.adicionarSenha(senha);
  }

  gerarSenhaGeral() {
    const senha = {
      tipo: 'person',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: ''
    };

    this.senhaService.adicionarSenha(senha);

    console.log(this.senhaService.getSenhas())
    console.log(this.senhaService.getSenhasChamadas())

  }

  gerarSenhaExames() {
    const senha = {
      tipo: 'document',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: ''
    };

    this.senhaService.adicionarSenha(senha);
  }
}
