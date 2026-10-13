import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AuthGuard, NMHCoreConfigService, NMHCoreModule } from 'nmh-core';
import { environment } from '../environments/environment';





export const appConfig: ApplicationConfig = {
 providers: [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  importProvidersFrom(NMHCoreModule),
  AuthGuard,
  { provide: NMHCoreConfigService, useValue: { apiUrl: environment.url } }
]
};
