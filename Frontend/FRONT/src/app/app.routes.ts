import { CanMatchFn, Router, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AuthGuard } from 'nmh-core';
import { inject } from '@angular/core/primitives/di';

const authGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const guard = inject(AuthGuard);
  const url = '/' + segments.map(s => s.path).join('/');
  const state = { url, root: router.routerState.snapshot.root } as any;
  
  
  return guard.canActivate ? guard.canActivate(state) : true;
};

export const routes: Routes = [
  { path: '', component: Home, canMatch: [authGuard] }
];
