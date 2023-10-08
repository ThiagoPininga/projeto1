import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../senha.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  senhasGeradas: any[] = [];

  constructor(private senhaService: SenhaService) {}

  ngOnInit() {
    // Assinar o Observable para obter as senhas
    this.senhaService.getSenhas().subscribe((senhas) => {
      this.senhasGeradas = senhas;
    });
  }
}
