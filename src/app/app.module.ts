import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { CardPokemonComponent } from './shared/components/card-pokemon/card-pokemon.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { PageLoadingComponent } from './shared/components/page-loading/page-loading.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonsComponent,
    DetailPokemonComponent,
    CardPokemonComponent,
    PageLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
