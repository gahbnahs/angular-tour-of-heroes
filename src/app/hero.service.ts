import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import  {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service'

@Injectable({
providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes1');
    this.messageService.add('HeroService: fetched heroes2');
    return of(HEROES);
  }

  selectHeroes(hero: Hero){
    this.messageService.add('a hero was selected ' + "gs");
  }

  getHero(id: Number):Observable<Hero>{
    this.messageService.add(`HeroService is fetching hero with id=${id}`);
    return of(HEROES.find(hero=> hero.id== id));
  }
  constructor(private messageService:MessageService) { }
}
