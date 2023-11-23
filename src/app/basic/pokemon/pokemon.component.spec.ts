import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { PokemonComponent } from './pokemon.component';
import { PokemonServiceService } from './service/pokemon-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let mockReturnGetPokemon: any = null

const MockPokemonServiceService = {
  getPokemon: () => of(mockReturnGetPokemon)
}


describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PokemonComponent],
      providers: [PokemonServiceService],

      // providers: [{
      //   provide: PokemonServiceService,
      //   useValue: MockPokemonServiceService
      //   // useClass: MockPokemonServiceService
      // }]
    })
    .overrideProvider(PokemonServiceService, { useValue: MockPokemonServiceService})
    .compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to requets in ngOnInit function', () => {
    const mockPokemon = {
      name: 'mock_pokemon_component2',
      sprites: {
        front_default: 'mock_photo_component2'
      }
    }

    mockReturnGetPokemon = mockPokemon;

    component.ngOnInit();

    expect(component.charizard).toBe(mockPokemon);
  });

  it('should to call getPokemon once in call ngOnInit', () => {
    jest.spyOn(MockPokemonServiceService, 'getPokemon')

    component.ngOnInit();

    expect(MockPokemonServiceService.getPokemon).toHaveBeenCalledTimes(1);
  });
});
