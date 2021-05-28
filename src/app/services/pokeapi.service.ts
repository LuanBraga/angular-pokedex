import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url = '//dev.treinaweb.com.br/pokeapi/';

  constructor(
    private http: HttpClient
  ) { }

  pokeList = [
    {name:'bulbasaur', number: 1},
    {name:'charmander', number: 2},
    {name:'squirtle', number: 3},
    {name:'pikachu', number: 4}
  ]

  listAll(){
    this.http.get(`${this.url}pokedex/1`).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
