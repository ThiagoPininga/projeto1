import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../senha.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  senhasGeradas: any[] = [];
  senhasAtendidas: any[] = [];

  constructor(private senhaService: SenhaService) {}

  ngOnInit() {
    // Obtenha as senhas geradas do serviço
    this.senhaService.getSenhas().subscribe((senhas) => {
      this.senhasGeradas = senhas;
    });

    // Obtenha as senhas atendidas do serviço
    this.senhaService.getSenhasChamadas().subscribe((senhas) => {
      this.senhasAtendidas = senhas;
    });
  }
  

  // Método para contar o número de senhas de um tipo específico
  contarSenhasPorTipo(senhas: any[], tipo: string): number {
    return senhas.filter((senha) => senha.tipo === tipo).length;
  }
  
}
