import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Onkgopotse Lenake' },
      { id: 2, name: 'Kgupi Lenake' },
      { id: 3, name: 'Mr. Nice' },
      { id: 4, name: 'Narco' },
      { id: 5, name: 'Bombasto' },
      { id: 6, name: 'Celeritas' },
      { id: 7, name: 'Magneta' },
      { id: 8, name: 'RubberMan' },
      { id: 9, name: 'Dynama' },
      { id: 10, name: 'Dr IQ' },
      { id: 11, name: 'Magma' },
      { id: 12, name: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
