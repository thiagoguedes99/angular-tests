import { routes } from './app.routes'
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';
import { CounterComponent } from './basic/counter/counter.component';
import { FatherComponent } from './basic/family/father/father.component';
import { PokemonComponent } from './basic/pokemon/pokemon.component';


describe('AppRoutes', () => {

  it('should to match snapshot', () => {
    expect(routes).toMatchSnapshot();
  });

  it('should to length routes', () => {
    expect(routes.length).toBe(4);
  });

  it('should to router for path basic/counter the CounterComponent', () => {
    expect(routes[0].path).toBe('basic/counter');
    expect(routes[0].component).toBe(CounterComponent);
  });

  it('should to router for path basic/counter/:initial the CounterComponent', () => {
    expect(routes[1].path).toBe('basic/counter/:initial');
    expect(routes[1].component).toBe(CounterRouteComponent);
  });

  it('should to router for path basic/pokemmon the PokemonComponent', () => {
    expect(routes[2].path).toBe('basic/pokemmon');
    expect(routes[2].component).toBe(PokemonComponent);
  });

  it('should to router for path basic/family the PokemonComponent', () => {
    expect(routes[3].path).toBe('basic/family');
    expect(routes[3].component).toBe(FatherComponent);
  });


});
