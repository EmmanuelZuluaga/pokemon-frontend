import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input()
  public pokemonInfo: any;

  @Input()
  public detailPokemon:any;

  @Output('emitPokemonInfo')
  public emitPokemonInfo: EventEmitter<{}> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }
  public seeDetails(){
    this.emitPokemonInfo.emit(this.pokemonInfo);
  }

}
