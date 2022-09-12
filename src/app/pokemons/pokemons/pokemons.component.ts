import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public loading:any=false;
  public pagination:any=1;
  public initialPaginationPokemons:any=1;
  public pokemons:any=[];
  public currentUser: any;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPokemons();
    this.fetchUser();
  }

  public fetchUser(){
    this.currentUser=JSON.parse(localStorage.getItem('user') || '');
  }

  public closeSesion(){
    localStorage.clear();
    this.router.navigate(['login']);
  }


  public fetchPokemons(){
    this.pokemonService.getPokemonsPagination('',this.initialPaginationPokemons).subscribe((response:any)=>{
      this.pokemons=response.pokemons;
      this.loading=true;
    });
  }

  public changePagination(position:any){
      
    if(position==='ahead'){
      this.loading=false;
      this.initialPaginationPokemons=this.initialPaginationPokemons+10;
      this.pagination++;
      this.fetchPokemons();
    }else{
      if(this.initialPaginationPokemons>=11){
        this.loading=false;
        this.initialPaginationPokemons=this.initialPaginationPokemons-10;
        this.pagination--;
        this.fetchPokemons();
      }
      
    }

    
     
  }

 

}
