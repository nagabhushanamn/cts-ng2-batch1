import { Injectable } from '@angular/core'

import { HEROES } from './mock-heroes';
import { Hero } from './hero/hero';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
