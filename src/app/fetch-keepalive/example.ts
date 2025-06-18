import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AnalyticsData } from './analytics-data.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly _http = inject(HttpClient);

  // By enabling { keepalive: true } in your fetch-based calls, Angular lets these requests run to completion even during page unload events.
  sendAnalyticsData(data: AnalyticsData): Observable<void> {
    return this._http.post<void>('/api/analytics', data, { keepalive: true });
  }
}
