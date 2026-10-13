import { Routes } from '@angular/router';
import { AuthGuard } from 'nmh-core';



export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/home/home').then((m) => m.Home),
  },
  {
  path: 'tavniyot',
  canActivate: [AuthGuard],
  loadComponent: () =>
    import('./components/nihul-tavniyot-dashboard/nihul-tavniyot-dashboard.component')
      .then((m) => m.NihulTavniyotDashboardComponent),
},
];
