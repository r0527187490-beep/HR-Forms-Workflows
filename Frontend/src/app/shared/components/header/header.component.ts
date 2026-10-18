import { Component } from '@angular/core';
import { TavnitEditor } from '../../../components/tavnit-editor/tavnit-editor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [TavnitEditor]
})
export class HeaderComponent {}