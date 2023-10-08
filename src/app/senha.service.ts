import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {
  private senhas: string[] = [];
  private sequenciaAtual = 1; // Inicialize com o valor inicial da sequência
  private senhasSubject: BehaviorSubject<string[]> = new BehaviorSubject(this.senhas);

  constructor() {}

  // Adicionar senha ao array e notificar observadores
  adicionarSenha(senha: string): void {
    this.senhas.push(senha);
    this.senhasSubject.next([...this.senhas]);
  }

  // Obter senhas como um Observable
  getSenhas(): Observable<string[]> {
    return this.senhasSubject.asObservable();
  }

  // Obter a próxima sequência e atualizá-la
  obterProximaSequencia(): string {
    const proximaSequencia = ('000' + this.sequenciaAtual).slice(-3); // Formata a sequência com três dígitos
    this.sequenciaAtual++; // Atualiza a sequência para a próxima chamada

    return proximaSequencia;
  }
}
