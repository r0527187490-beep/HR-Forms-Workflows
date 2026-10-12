import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AuthGuard, NMHCoreConfigService } from 'nmh-core';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
      provideHttpClient(withInterceptorsFromDi()),
     { provide: NMHCoreConfigService, useValue: { apiUrl: environment.url } },AuthGuard
  ]
};
