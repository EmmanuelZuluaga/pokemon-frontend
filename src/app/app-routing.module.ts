import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
    children: [
      {
        path: 'detail-pokemon/:idPokemon',
        component: DetailPokemonComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
