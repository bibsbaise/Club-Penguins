import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css'
})
export class LevelsComponent implements OnInit {
  modulo!: string;

  totalNiveis = 10; // você pode depois puxar isso de uma API, se quiser
  nivelAtual = 3;   // esse seria o nível em que o usuário está
  niveis: { numero: number; status: 'bloqueado' | 'completo' | 'atual' }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  const rawModulo = this.route.snapshot.paramMap.get('modulo') || '';

  // Mapa de slugs para nomes corretos com acentuação
  const modulosComAcento: Record<string, string> = {
    'saudacoes': 'Saudações',
    'familia': 'Família'
  };

  // Verifica se o slug está no mapa, senão aplica a transformação padrão
  if (modulosComAcento[rawModulo]) {
    this.modulo = modulosComAcento[rawModulo];
  } else {
    const moduloComEspacos = rawModulo.replace(/-/g, ' ');
    this.modulo = moduloComEspacos.charAt(0).toUpperCase() + moduloComEspacos.slice(1);
  }

  this.gerarNiveis();
}

  gerarNiveis(): void {
    this.niveis = Array.from({ length: this.totalNiveis }, (_, i) => {
      const numero = i + 1;
      let status: 'bloqueado' | 'completo' | 'atual' = 'bloqueado';

      if (numero < this.nivelAtual) status = 'completo';
      else if (numero === this.nivelAtual) status = 'atual';

      return { numero, status };
    });
  }
}