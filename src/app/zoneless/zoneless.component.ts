import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-zoneless',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
      <div class="border-l-4 border-blue-500 pl-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Zoneless Change Detection Guide</h1>
        <p class="text-gray-700 leading-relaxed">
          To enable zoneless change detection, add the following to your app config:
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-gray-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Setup Steps:</h2>
          <ol class="space-y-3 text-gray-700">
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium"
                >1</span
              >
              <div>
                <code class="bg-gray-100 px-2 py-1 rounded text-sm">
                  bootstrapApplication(AppComponent, &#123;providers: [ provideZonelessChangeDetection(), ]&#125;);
                </code>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium"
                >2</span
              >
              <span>remove the zone.js and zone.js/testing polyfills from your angular.json</span>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium"
                >3</span
              >
              <code class="bg-gray-100 px-2 py-1 rounded text-sm">npm uninstall zone.js</code>
            </li>
          </ol>
        </div>

        <div class="bg-blue-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-blue-800 mb-4">How It Works</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Angular relies on notifications from core APIs in order to determine when to run change detection and on
            which views. These notifications include:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>ChangeDetectorRef.markForCheck (called automatically by AsyncPipe)</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>ComponentRef.setInput</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Updating a signal that's read in a template</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Bound host or template listeners callbacks</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Attaching a view that was marked dirty by one of the above</span>
            </li>
          </ul>
        </div>

        <div class="bg-yellow-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-yellow-800 mb-4">OnPush Strategy</h2>
          <p class="text-gray-700 leading-relaxed">
            The OnPush change detection strategy is not required, but it is a recommended step towards zoneless
            compatibility for application components.
          </p>
        </div>

        <div class="bg-red-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-red-800 mb-4">Migration Notes</h2>
          <p class="text-gray-700 leading-relaxed">
            Applications and libraries need to remove uses of NgZone.onMicrotaskEmpty, NgZone.onUnstable and
            NgZone.onStable. These observables will never emit when an Application enables zoneless change detection.
            Similarly, NgZone.isStable will always be true and should not be used as a condition for code execution.
            (Replace with afterNextRender, afterEveryRender etc)
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            NgZone.run and NgZone.runOutsideAngular do not need to be removed in order for code to be compatible with
            Zoneless applications.
          </p>
          <p></p>
        </div>

        <div class="bg-orange-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-orange-800 mb-4">Error Handling</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Many developers use Zone.js for capturing errors in their apps even without realizing it. Zone.js also lets the framework know when we're ready to flush the server-side rendered application to the client. In the world of zoneless, we had to find robust solutions for these problems.
          </p>
          <div class="bg-white rounded p-4 border border-orange-200">
            <pre class="text-sm text-gray-800 overflow-x-auto"><code>bootstrapApplication(AppComponent, &#123;providers: [
  provideBrowserGlobalErrorListeners()
]&#125;);</code></pre>
          </div>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-green-800 mb-4">SSR:</h2>

          <div class="space-y-4">
            <div class="bg-white rounded p-4 border border-green-200">
              <pre class="text-sm text-gray-800 overflow-x-auto"><code>const taskService = inject(PendingTasks);
taskService.run(async () => &#123;
  const someResult = await doSomeWorkThatNeedsToBeRendered();
  this.someState.set(someResult);
&#125;);</code></pre>
            </div>

            <div class="bg-white rounded p-4 border border-green-200">
              <pre class="text-sm text-gray-800 overflow-x-auto"><code>const taskService = inject(PendingTasks);
const taskCleanup = taskService.add();
try &#123;
  await doSomeWorkThatNeedsToBeRendered();
&#125; catch &#123;
  // handle error
&#125; finally &#123;
  taskCleanup();
&#125;</code></pre>
            </div>

            <div class="bg-white rounded p-4 border border-green-200">
              <pre
                class="text-sm text-gray-800 overflow-x-auto"
              ><code>readonly myObservableState = someObservable.pipe(pendingUntilEvent());</code></pre>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-purple-800 mb-4">Verification Tool</h2>
          <p class="text-gray-700 leading-relaxed">
            Angular also provides an additional tool to help verify that an application is making updates to state in a
            zoneless-compatible way.
            <code class="bg-purple-100 px-2 py-1 rounded text-sm"
              >provideCheckNoChangesConfig(&#123;exhaustive: true, interval: &lt;milliseconds&gt;&#125;)</code
            >
            can be used to periodically check to ensure that no bindings have been updated without a notification
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ZonelessComponent {}
