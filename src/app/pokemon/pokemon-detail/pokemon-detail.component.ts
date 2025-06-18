import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Pokemon, PokemonCompact } from '../pokemon.interface';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      @if (resourceRef.isLoading()) {
        <div class="flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span class="ml-3 text-gray-600">Loading Pokemon details...</span>
        </div>
      } @else if (resourceRef.error()) {
        <div class="text-center py-12">
          <div class="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Failed to load Pokemon</h2>
          <p class="text-gray-600">Could not find details for "{{ name() }}"</p>
          <button
            (click)="resourceRef.reload()"
            class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      } @else if (resourceRef.value()) {
        @let pokemon = resourceRef.value()!;
        <div class="space-y-8">
          <!-- Header Section -->
          <div class="text-center border-b border-gray-200 pb-8">
            <h1 class="text-4xl font-bold text-gray-900 capitalize mb-2">{{ pokemon.name }}</h1>
            <p class="text-gray-600">#{{ pokemon.id.toString().padStart(3, '0') }}</p>
          </div>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column - Image and Basic Info -->
            <div class="space-y-6">
              <!-- Pokemon Image -->
              <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
                @if (pokemon.sprites.front_default) {
                  <img
                    [src]="pokemon.sprites.front_default"
                    [alt]="pokemon.name"
                    class="w-48 h-48 mx-auto object-contain"
                  />
                } @else {
                  <div class="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                    <span class="text-gray-500 text-lg">No Image</span>
                  </div>
                }
              </div>

              <!-- Types -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Types</h3>
                <div class="flex flex-wrap gap-2">
                  @for (typeInfo of pokemon.types; track typeInfo.slot) {
                    <span class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium capitalize">
                      {{ typeInfo.type.name }}
                    </span>
                  }
                </div>
              </div>
            </div>

            <!-- Right Column - Stats and Details -->
            <div class="space-y-6">
              <!-- Physical Stats -->
              <div class="bg-green-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-green-800 mb-4">Physical Stats</h3>
                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">Height</span>
                    <div class="text-right">
                      <span class="text-green-700 font-semibold">{{ pokemon.height / 10 }} m</span>
                      <span class="text-gray-500 text-sm ml-2">({{ pokemon.height }} decimeters)</span>
                    </div>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">Weight</span>
                    <div class="text-right">
                      <span class="text-green-700 font-semibold">{{ pokemon.weight / 10 }} kg</span>
                      <span class="text-gray-500 text-sm ml-2">({{ pokemon.weight }} hectograms)</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sprites Gallery -->
              <div class="bg-purple-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-purple-800 mb-4">Sprites</h3>
                <div class="grid grid-cols-2 gap-4">
                  @if (pokemon.sprites.front_default) {
                    <div class="text-center">
                      <img
                        [src]="pokemon.sprites.front_default"
                        [alt]="pokemon.name + ' front'"
                        class="w-24 h-24 mx-auto object-contain bg-white rounded-lg border"
                      />
                      <p class="text-sm text-gray-600 mt-2">Front</p>
                    </div>
                  }
                  @if (pokemon.sprites.back_default) {
                    <div class="text-center">
                      <img
                        [src]="pokemon.sprites.back_default"
                        [alt]="pokemon.name + ' back'"
                        class="w-24 h-24 mx-auto object-contain bg-white rounded-lg border"
                      />
                      <p class="text-sm text-gray-600 mt-2">Back</p>
                    </div>
                  }
                </div>
              </div>

              <!-- Additional Info -->
              <div class="bg-yellow-50 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-yellow-800 mb-4">Additional Info</h3>
                <div class="space-y-2 text-gray-700">
                  <p><span class="font-medium">Pokemon ID:</span> {{ pokemon.id }}</p>
                  <p><span class="font-medium">Type Count:</span> {{ pokemon.types.length }}</p>
                  <p>
                    <span class="font-medium">Has Front Sprite:</span>
                    <span class="ml-1" [class]="pokemon.sprites.front_default ? 'text-green-600' : 'text-red-600'">
                      {{ pokemon.sprites.front_default ? 'Yes' : 'No' }}
                    </span>
                  </p>
                  <p>
                    <span class="font-medium">Has Back Sprite:</span>
                    <span class="ml-1" [class]="pokemon.sprites.back_default ? 'text-green-600' : 'text-red-600'">
                      {{ pokemon.sprites.back_default ? 'Yes' : 'No' }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-center space-x-4 pt-6 border-t border-gray-200">
            <button
              (click)="resourceRef.reload()"
              class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
              <span>Reload</span>
            </button>
            <button
              onclick="history.back()"
              class="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              <span>Go Back</span>
            </button>
          </div>
        </div>
      }
    </div>
  `,
})
export class PokemonDetailComponent {
  public readonly name = input.required<PokemonCompact['name']>();

  public readonly resourceRef = httpResource<Pokemon>(() => `https://pokeapi.co/api/v2/pokemon/${this.name()}`);
}
