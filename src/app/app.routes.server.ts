import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemons',
    renderMode: RenderMode.Server,
  },
  {
    path: 'pokemons/:name',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<{ name: string }[]> {
      return [{ name: 'bulbasaur' }, { name: 'squirtle' }, { name: 'pikachu' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
