import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public loading:any=false;
  public initialPaginationPokemons:any=1;
  public pokemons:any=[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fetchPokemons()
   
  }



  public fetchPokemons(){
    this.pokemonService.getPokemonsPagination('',this.initialPaginationPokemons).subscribe((response:any)=>{
      this.pokemons=response.pokemons;
      this.loading=true;
    });
  }

  public changePagination(position:any){
      this.loading=false;
    if(position==='ahead'){
      this.initialPaginationPokemons=this.initialPaginationPokemons+20;
      this.fetchPokemons();
    }else{
      if(this.initialPaginationPokemons>=21){
        this.initialPaginationPokemons=this.initialPaginationPokemons-20;
        this.fetchPokemons();
      }
      
    }

    
     
  }

 

}
