import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonList = [
    {name:'bulbasaur', number: 1},
    {name:'charmander', number: 2},
    {name:'squirtle', number: 3},
    {name:'pikachu', number: 4}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
