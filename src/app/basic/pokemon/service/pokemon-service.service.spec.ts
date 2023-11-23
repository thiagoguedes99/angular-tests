import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonServiceService } from './pokemon-service.service';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonServiceService]
    });

    service = TestBed.inject(PokemonServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should to valid getPokemon function', (done) => {
    const dummyPokemon = {
      name: 'mock_pokemon',
      sprites: {
        front_default: 'mock_photo'
      }
    };

    service.getPokemon(1).subscribe(resp => {
      expect(resp).toEqual(dummyPokemon);
      // expect(resp.name).toEqual('aaaaaaa');
      done()
    })

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');
    expect( request.request.method ).toBe('GET');
    request.flush( dummyPokemon );

  });
});
