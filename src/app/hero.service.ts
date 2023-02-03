import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    var ts = new Date().toLocaleString();
    this.messageService.add(`${ts}: Die Liste wurde aktualisiert.`);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id);
    var ts = new Date().toLocaleString();
    this.messageService.add(`${ts}: Lernende mit ID=${id} geholt`);
    return of(hero);
  }
}