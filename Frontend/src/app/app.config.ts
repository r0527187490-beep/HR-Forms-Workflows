import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { AuthGuard, NMHCoreConfigService, NMHCoreModule } from 'nmh-core';
import { environment } from '../environments/environment';





export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Aura } }),
    importProvidersFrom(NMHCoreModule),
    AuthGuard,
    { provide: NMHCoreConfigService, useValue: { apiUrl: environment.url } }
  ]
};
