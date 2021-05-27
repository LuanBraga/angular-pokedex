import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  pokemonList = [
    {name:'bulbasaur', number: 1},
    {name:'charmander', number: 2},
    {name:'squirtle', number: 3},
    {name:'pikachu', number: 4}
  ]

  selectedPkm = { name: ''};

  get pkmSprite(){
    const name = this.selectedPkm.name;
    return `//img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;
  }

  ngOnInit(): void {
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
