import {provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';

export default [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection(), provideHttpClient()];

