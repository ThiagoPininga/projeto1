import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {
  private senhas: any[] = [];
  private senhasChamadas: any[] = [];
  private sequenciaGeralAtual = 2;
  private sequenciaPrioritariaAtual = 4;
  private sequenciaExamesAtual = 2;
  private senhasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private senhasChamadasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  // Adicionar senha ao array e notificar observadores
  adicionarSenha(senha: any): string {
    let sequenciaAtual: number;

    if (senha.tipo === 'accessibility') {
      sequenciaAtual = this.sequenciaPrioritariaAtual;
      this.sequenciaPrioritariaAtual++;
    } else if (senha.tipo === 'person') {
      sequenciaAtual = this.sequenciaGeralAtual;
      this.sequenciaGeralAtual++;
    } else if (senha.tipo === 'document') {
      sequenciaAtual = this.sequenciaExamesAtual;
      this.sequenciaExamesAtual++;
    } else {
      throw new Error('Tipo de senha inválido.');
    }

    senha.numero = this.gerarNumero(senha.tipo, sequenciaAtual);

    this.senhas.push(senha);
    this.senhasSubject.next([...this.senhas]);

    // Adicionar a senha chamada ao array de senhas chamadas
    this.senhasChamadas.push(senha);
    this.senhasChamadasSubject.next([...this.senhasChamadas]);

    // Retornar o número da senha gerada
    return senha.numero;
  }

  // Obter senhas como um Observable
  getSenhas(): Observable<any[]> {
    return this.senhasSubject.asObservable();
  }

  // Obter as senhas chamadas como um Observable
  getSenhasChamadas(): Observable<any[]> {
    return this.senhasChamadasSubject.asObservable();
  }

  private gerarNumero(tipo: string, sequencia: number): string {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear().toString().slice(-2);
    const mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    const dia = ('0' + dataAtual.getDate()).slice(-2);
    const sequenciaFormatada = ('00' + sequencia).slice(-2);

    if(tipo == 'document'){
      return `${ano}${mes}${dia}-SE${sequenciaFormatada}`;
    }else if(tipo == 'accessibility'){
      return `${ano}${mes}${dia}-SP${sequenciaFormatada}`;
    }else{
      return `${ano}${mes}${dia}-SG${sequenciaFormatada}`;
    }
  }
}
