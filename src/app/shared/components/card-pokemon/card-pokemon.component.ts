import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input()
  public pokemonInfo: any;

  

  constructor() { }

  ngOnInit(): void {
  }

}
