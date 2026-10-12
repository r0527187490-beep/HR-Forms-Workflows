import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService, NMHCoreModule } from 'nmh-core';


@Component({
  imports: [RouterOutlet,NMHCoreModule ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor(public authService: AuthService) {}
  protected readonly title = signal('hakamat-tfasim');
}
