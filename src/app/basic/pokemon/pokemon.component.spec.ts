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
  let compiled: HTMLBRElement;


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
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to match snapshot', () => {
    expect(compiled).toMatchSnapshot();
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

  it('should to update in html after fineshed request', () => {
    const mockPokemon = {
      name: 'mock_pokemon_component_html',
      sprites: {
        front_default: 'mock_photo_component_html'
      }
    }

    mockReturnGetPokemon = mockPokemon;

    component.ngOnInit();
    fixture.detectChanges();

    const h3  = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect( h3?.textContent ).toContain( mockPokemon.name.replace('m', 'M') );
    expect( img?.src ).toBe( `http://localhost/${mockPokemon.sprites.front_default}` );
    expect( img?.alt ).toBe( mockPokemon.name );

  });

  it('should to view loading h2 when not has charizard', () => {
    component.charizard = undefined;

    fixture.detectChanges();

    const h2  = compiled.querySelector('h2');
    console.log(compiled.innerHTML)

    expect( h2?.textContent ).toContain('Loading...');
  });
});
