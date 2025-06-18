import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stable-apis',
  template: `
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Stable APIs Announcement</h1>
        
        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <p class="text-lg text-gray-700 leading-relaxed">
            After collecting feedback from RFCs and iterating on the implementation, we promoted 
            <span class="font-semibold text-green-700">signal</span>, 
            <span class="font-semibold text-green-700">computed</span>, 
            <span class="font-semibold text-green-700">input</span> and 
            <span class="font-semibold text-green-700">view queries</span> APIs to stable. 
            Today, we are announcing 
            <span class="font-semibold text-blue-700">effect</span>, 
            <span class="font-semibold text-blue-700">linkedSignal</span> and 
            <span class="font-semibold text-blue-700">toSignal</span> as stable as well.
          </p>
        </div>
        
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 class="text-lg font-semibold text-green-800 mb-3">Previously Stable</h3>
            <ul class="space-y-2 text-green-700">
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>signal</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>computed</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>input</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>view queries</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Newly Stable</h3>
            <ul class="space-y-2 text-blue-700">
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>effect</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>linkedSignal</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>toSignal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StableApisComponent {}
