import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {
  private senhas: any[] = [{

  }];
  private senhasChamadas: any[] = [{

  }];
  private sequenciaGeralAtual = 1;
  private sequenciaPrioritariaAtual = 1;
  private sequenciaExamesAtual = 1;
  private senhasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private senhasChamadasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); // Subject para senhas chamadas

  constructor() {}

  // Adicionar senha ao array e notificar observadores
  adicionarSenha(senha: any): void {
    if (senha.tipo === 'geral') {
      senha.numero = this.gerarNumero('GE', this.sequenciaGeralAtual);
      this.sequenciaGeralAtual++;
    } else if (senha.tipo === 'prioritario') {
      senha.numero = this.gerarNumero('PR', this.sequenciaPrioritariaAtual);
      this.sequenciaPrioritariaAtual++;
    } else if (senha.tipo === 'exames') {
      senha.numero = this.gerarNumero('EX', this.sequenciaExamesAtual);
      this.sequenciaExamesAtual++;
    }

    this.senhas.push(senha);
    this.senhasSubject.next([...this.senhas]);
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
    return `${ano}${mes}${dia}-${tipo}${sequenciaFormatada}`;
  }
}
