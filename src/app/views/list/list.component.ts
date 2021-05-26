import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonList = [
    {name:'Bulbasaur', number: 1},
    {name:'Charmander', number: 2},
    {name:'Squirtle', number: 3},
    {name:'Pikachu', number: 4}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
