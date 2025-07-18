import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = "";
  private pokeData: PokemonData | any;

  constructor(
    private http: HttpClient
  ) { 
    this.baseUrl = environment.pokeApi
  }
  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokeData = this.http
      .get<PokemonData>
          (`${this.baseUrl}/${pokemonName}`)

    return this.pokeData;
  }
}
