import { Component, OnInit, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { PokemonServiceService } from './service/pokemon-service.service';
import { Pokemon } from './interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  // imports: [CommonModule],
  imports: [TitleCasePipe],
  providers: [PokemonServiceService],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
  pokemonService: PokemonServiceService  = inject(PokemonServiceService);

  public charizard?: Pokemon;

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
      .subscribe( pokemon => {
        this.charizard = pokemon;
      });
  }

}
