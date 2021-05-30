import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//interface para a resposta da requisição
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

  //url da api que fornece a lista de nome dos pokemons
  private url = '//dev.treinaweb.com.br/pokeapi/';

  constructor(
    //injeta o httpClient de httpClientModule
    private http: HttpClient
  ) { }

  //array de objetos para receber a lista de pokemons
  pokeList = [{name:'', number: 0}]

  //metodo responsável pela requisição http get
  listAll(){
    this.http.get<pokeListResponse>(`${this.url}pokedex/1`).subscribe(
      response => {
        response.pokemon.forEach(pokemon => {
          pokemon.name;
          pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
        });

        this.pokeList = this.sortPokemon(response.pokemon).filter(pokemon => pokemon.number < 650)

        console.log(this.pokeList);
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
