import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
  pokemon?: PokemonData;
  event: any;

  constructor(
    private service:PokemonService
  ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
      front_default: ''
      },types: []
    }}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }
  getPokemon(pokemonName: string) {
    this.service.getPokemon(pokemonName).subscribe(
      {
        next: res => {
        this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          }
        },
        error: (err) => console.error('Erro ao buscar Pokémon:'),
      }
    );
  }}
