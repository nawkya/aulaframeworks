import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  vet = [1, 2, 3]
  heros = ["homem-aranha", "doutor-estranho", "Viuva-negra", "capitão-america"]

  hero: Hero = {
    id: 1,
    nome: "capitao-america"
  }
}

