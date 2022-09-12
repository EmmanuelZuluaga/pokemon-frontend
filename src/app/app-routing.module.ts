import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'pokemons',
    component: PokemonsComponent,
    children: [
      {
        path: 'detail-pokemon/:idPokemon',
        component: DetailPokemonComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
