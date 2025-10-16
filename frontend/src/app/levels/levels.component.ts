import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css'
})
export class LevelsComponent implements OnInit {
  modulo!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.modulo = this.route.snapshot.paramMap.get('modulo') || '';
  }
}
