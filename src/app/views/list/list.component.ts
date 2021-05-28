import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private pokeapi: PokeapiService
  ) { }

  nameFilter = '';

  get pokemonList() {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  } 

  selectedPkm = { name: ''};

  get pkmSprite(){
    const name = this.selectedPkm.name;
    return `//img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;
  }

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
