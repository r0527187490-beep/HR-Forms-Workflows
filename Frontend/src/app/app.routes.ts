import { ActivatedRouteSnapshot, CanActivateFn,Routes } from '@angular/router';
import { Home } from './components/home/home';
import { inject } from '@angular/core';
import { AuthGuard } from 'nmh-core';



const authGuard: CanActivateFn = (_route: ActivatedRouteSnapshot, state) =>
  inject(AuthGuard).canActivate(state);

export const routes: Routes = [
  { path: '', component: Home, canActivate: [authGuard] }
];
