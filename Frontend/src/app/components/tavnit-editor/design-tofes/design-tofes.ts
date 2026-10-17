import { Component } from '@angular/core';
import { BuildDragSidebar } from './build-drag-sidebar/build-drag-sidebar';
import { TofesCanvas } from './tofes-canvas/tofes-canvas';

@Component({
  selector: 'app-design-tofes',
  standalone: true,
  imports: [
    BuildDragSidebar,
    TofesCanvas
  ],
  templateUrl: './design-tofes.html',
  styleUrl: './design-tofes.scss'
})
export class DesignTofes {}