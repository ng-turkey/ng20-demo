import { Route } from '@angular/router';

export const POKEMONS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pokemons.component').then((m) => m.PokemonsComponent),
  },
  {
    path: ':name',
    loadComponent: () => import('./pokemon-detail/pokemon-detail.component').then((m) => m.PokemonDetailComponent),
  },
];
