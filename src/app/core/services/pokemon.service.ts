import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private endPoint: string = 'api/pokemons';

  constructor(private httpClient: HttpClient) { }


  /**
   * Funcion para obtener las calificaciones que le han realizado a un usuario
   * @param idUsuario, Id del usuario del cual se desean las calificaciones
   */
   public getPokemonsPagination(token:any, numPagination:any) {
    return this.httpClient.get<any[]>(
      `${environment.baseUrl}/${this.endPoint}/pagination/${numPagination}`
    );
  }
}
