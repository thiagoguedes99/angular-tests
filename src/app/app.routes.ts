import { Routes } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';
import { PokemonComponent } from './basic/pokemon/pokemon.component';
import { FatherComponent } from './basic/family/father/father.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';

export const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
  },
  {
    path: 'basic/counter/:initial',
    component: CounterRouteComponent
  },
  {
    path: 'basic/pokemmon',
    component: PokemonComponent
  },
  {
    path: 'basic/family',
    component: FatherComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'basic/family'
  // }

];
