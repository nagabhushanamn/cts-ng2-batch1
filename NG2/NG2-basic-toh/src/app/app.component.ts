import { Component } from '@angular/core';
import { Hero } from './hero/hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title: string = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}

