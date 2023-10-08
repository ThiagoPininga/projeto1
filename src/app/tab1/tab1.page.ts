import { Component, ChangeDetectorRef } from '@angular/core';
import { SenhaService } from '../senha.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  senhasChamadas: any[] = [
    {
      tipo: 'document',
      numero: "231017-SE01"
    },
    {
      tipo: 'person',
      numero: "231017-SG01"
    },
    {
      tipo: 'accessibility',
      numero: "231017-SP03"
    },
    {
      tipo: 'accessibility',
      numero: "231017-SP02"
    },
    {
      tipo: 'accessibility',
      numero: "231017-SP01"
    }
  ];
  constructor(private senhaService: SenhaService, private cdr: ChangeDetectorRef) {}

  gerarSenhaPrioritaria() {
    const senha = {
      tipo: 'accessibility',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: '',
      numero: ""
    };

    this.senhaService.adicionarSenha(senha);
    this.cdr.detectChanges()
  }

  gerarSenhaGeral() {
    const senha = {
      tipo: 'person',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: '',
      numero: ""
    };

    this.senhaService.adicionarSenha(senha);
    this.cdr.detectChanges()


    console.log(this.senhaService.getSenhas())
    console.log(this.senhaService.getSenhasChamadas())

  }

  gerarSenhaExames() {
    const senha = {
      tipo: 'document',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: '',
      numero: ""
    };

    this.senhaService.adicionarSenha(senha);
    this.cdr.detectChanges()

  }
}
