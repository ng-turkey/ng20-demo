import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { Router } from 'express';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const ROUTES: Routes = [
  {
    path: '**',
    redirectTo: () => {
      const router = inject(Router);
      const authService = inject(AuthService);

      return authService.isAuthorized$.pipe(
        map((isAuthorized) => router.createUrlTree([`/${isAuthorized ? 'home' : 'login'}`])),
      );
    },
  },
];
