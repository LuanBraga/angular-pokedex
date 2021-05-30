import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit(): void {

    //realiza a requisição http get através da PokeApiService quando o componente é inicializado
    this.pokeapi.listAll();
  }

  constructor(
    //injeta o pokeapiService
    private pokeapi: PokeapiService
  ) { }

  //equivale ao input poke-filter
  nameFilter = '';

  //inicia com o valor nome vazio
  selectedPkm = { name: ''};

  selectPokemon(pkm){
    //alimenta o objeto SelectedPkm com o nome do pokemon atual selecionado na lista do template
    this.selectedPkm = pkm;
  }
  
  //fornece o sprite de cada pokemon da lista do template
  get pkmSprite(){
    const name = this.selectedPkm.name;

    //define a url fonte de cada pokemon a partir do nome passado para o objeto selectedPkm
    return `//img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;
  }

  //alimenta a lista do template
  get pokemonList() {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  } 
}
