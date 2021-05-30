import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface pokeListResponse{
  created: string;
  modified: string;
  name: string;
  pokemon: any;
  resourse_uri: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  // private url = '//dev.treinaweb.com.br/pokeapi/';

  private url = '//dev.treinaweb.com.br/pokeapi/';

  

  constructor(
    private http: HttpClient
  ) { }

  /* pokeList = [
    {name:'bulbasaur', number: 1},
    {name:'charmander', number: 2},
    {name:'squirtle', number: 3},
    {name:'pikachu', number: 4}
  ]
 */
  pokeList = [{name:'', number: 0}]

  listAll(){
    this.http.get<pokeListResponse>(`${this.url}pokedex/1`).subscribe(
      response => {
        response.pokemon.forEach(pokemon => {
          pokemon.name;
          pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
        });

        this.pokeList = this.sortPokemon(response.pokemon).filter(pokemon => pokemon.number < 650)
      }
    )
  }

  private getNumberFromUrl(url){
   return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  private sortPokemon(pokemonList){
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    });
  }

}
