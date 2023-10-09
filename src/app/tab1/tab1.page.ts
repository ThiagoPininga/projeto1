import { Component} from '@angular/core';
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
  constructor(private senhaService: SenhaService) {}

  gerarSenhaPrioritaria() {
    const senha = {
      tipo: 'accessibility',
      dataEmissao: new Date().toLocaleString(),
      dataAtendimento: '',
      horaAtendimento: '',
      guiche: '',
      numero: ""
    };

    const numeroSenha = this.senhaService.adicionarSenha(senha);
    this.mostrarAlert(numeroSenha)
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

    const numeroSenha = this.senhaService.adicionarSenha(senha);
    this.mostrarAlert(numeroSenha)
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

    const numeroSenha = this.senhaService.adicionarSenha(senha);
    this.mostrarAlert(numeroSenha)
  }

  mostrarAlert(numeroSenha: string) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Número da Senha';
    alert.message = numeroSenha;
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }
}
