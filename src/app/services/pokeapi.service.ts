import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor() { }

  pokeList = [
    {name:'bulbasaur', number: 1},
    {name:'charmander', number: 2},
    {name:'squirtle', number: 3},
    {name:'pikachu', number: 4}
  ]
}
