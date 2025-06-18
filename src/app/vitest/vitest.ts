import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vitest',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto p-6 space-y-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">⚡ Vitest Integration</h1>
        <p class="text-lg text-gray-600">Fast and modern testing framework for Angular applications</p>
      </div>

      <!-- Step 1: Angular.json Configuration -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span
            class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3"
            >1</span
          >
          Configure angular.json
        </h2>
        <p class="text-gray-600 mb-4">
          Update your <code class="bg-gray-100 px-2 py-1 rounded text-sm">angular.json</code> file to use Vitest as the
          test runner:
        </p>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&#123;
  "projects": &#123;
    "your-project-name": &#123;
      "architect": &#123;
        "test": &#123;
          "builder": "&#64;angular/build:unit-test",
          "options": &#123;
            "providersFile": "src/test-providers.ts",
            "tsConfig": "tsconfig.spec.json",
            "buildTarget": "::development",
            "runner": "vitest"
          &#125;
        &#125;
      &#125;
    &#125;
  &#125;
&#125;</code></pre>
        </div>
      </div>

      <!-- Step 2: Update Imports -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span
            class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3"
            >2</span
          >
          Update Test Imports
        </h2>
        <p class="text-gray-600 mb-4">Replace Jest imports with Vitest imports in your test files:</p>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre
            class="text-green-400 text-sm"
          ><code>import &#123; describe, beforeEach, it, expect &#125; from 'vitest';</code></pre>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <span class="mr-3">🚀</span>
          Why Vitest?
        </h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="font-semibold mb-2">⚡ Lightning Fast</h3>
            <p class="text-sm">Native ESM support and instant hot module replacement</p>
          </div>
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="font-semibold mb-2">🔧 Zero Config</h3>
            <p class="text-sm">Works out of the box with minimal configuration</p>
          </div>
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="font-semibold mb-2">🎯 Jest Compatible</h3>
            <p class="text-sm">Drop-in replacement for Jest with familiar API</p>
          </div>
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="font-semibold mb-2">📊 Rich Reporting</h3>
            <p class="text-sm">Beautiful test reports and coverage analysis</p>
          </div>
        </div>
      </div>

      <!-- Quick Start -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span
            class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3"
            >3</span
          >
          Run Tests
        </h2>
        <p class="text-gray-600 mb-4">Execute your tests with the Angular CLI:</p>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>ng test</code></pre>
        </div>
      </div>
    </div>
  `,
})
export class VitestComponent {}
