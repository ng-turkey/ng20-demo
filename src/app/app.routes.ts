import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./pokemon/pokemon.routes').then((m) => m.POKEMONS_ROUTES),
  },
  {
    path: 'stable-apis',
    loadComponent: () => import('./stable-apis/stable-apis.component').then((m) => m.StableApisComponent),
  },
  {
    path: 'zoneless',
    loadComponent: () => import('./zoneless/zoneless.component').then((m) => m.ZonelessComponent),
  },
  {
    path: 'vitest',
    loadComponent: () => import('./vitest/vitest').then((m) => m.VitestComponent),
  },
  {
    path: '**',
    redirectTo: '/stable-apis',
  },
];
