import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokeAPIResponse, PokemonsService } from './pokemons.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class PokemonsComponent {
  readonly #pokemonService = inject(PokemonsService);

  public readonly page = signal(0);

  // Angular 19 version
  // public readonly resource = rxResource({
  //   request: () => ({ page: this.page() }),
  //   loader: ({ params }) => this.#pokemonService.paginatePokemons(params.page),
  //   defaultValue: {
  //     count: 0,
  //     next: '',
  //     previous: '',
  //     results: [],
  //   } as PokeAPIResponse,
  // });

  // Angular 20 version
  // request: Renamed to params,
  // loader: Renamed to stream
  public readonly resource = rxResource({
    params: () => ({ page: this.page() }),
    stream: ({ params }) => this.#pokemonService.paginatePokemons(params.page),
    defaultValue: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    } as PokeAPIResponse,
  });

  public goToNextPage(): void {
    this.page.update((page) => page + 1);
  }

  public goToPreviousPage(): void {
    this.page.update((page) => page - 1);
  }

  // Angular 19 version
  // export enum ResourceStatus {
  //   Error = 1,
  //   Idle = 0,
  //   Loading = 2,
  //   Local = 5,
  //   Reloading = 3,
  //   Resolved = 4
  // }

  // Angular 20 version
  // export type ResourceStatus = 'idle' | 'error' | 'loading' | 'reloading' | 'resolved' | 'local';
}
