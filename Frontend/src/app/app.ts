import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService, NMHCoreModule } from 'nmh-core';
import { HeaderComponent } from './shared/components/header/header.component';


@Component({
  imports: [RouterOutlet,NMHCoreModule,HeaderComponent ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public authService = inject(AuthService);
}
