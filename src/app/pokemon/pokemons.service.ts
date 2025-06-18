import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonCompact } from './pokemon.interface';
import { Observable } from 'rxjs';

export interface PokeAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonCompact[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  readonly #httpClient = inject(HttpClient);

  public paginatePokemons(page: number): Observable<PokeAPIResponse> {
    const params = new HttpParams().set('offset', 10 * page).set('limit', 10);
    return this.#httpClient.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon`, { params });
  }
}
