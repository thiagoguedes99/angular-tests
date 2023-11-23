import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon';

@Injectable()
export class PokemonServiceService {
  http: HttpClient = inject(HttpClient);

  constructor() { }


  getPokemon( id: number ):Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
  }
}
