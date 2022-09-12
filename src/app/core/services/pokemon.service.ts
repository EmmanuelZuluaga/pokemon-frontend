import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private endPoint: string = 'api/pokemons';

  constructor(private httpClient: HttpClient) { }

  public getPokemonsPagination(token:any, numPagination:any) {
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.httpClient.get(`${environment.baseUrl}/${this.endPoint}/pagination/${numPagination}`, header);
  }

  
  public getPokemonById(token:any, IdPokemon:any) {
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.httpClient.get(`${environment.baseUrl}/${this.endPoint}/${IdPokemon}`, header);
  }
}
