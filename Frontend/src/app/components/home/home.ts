import { Component } from '@angular/core';
import { TavniyotKayamotListComponent } from '../nihul-tavniyot-dashboard/tavniyot-kayamot-list/tavniyot-kayamot-list.component';
import { TofesCanvas } from '../tavnit-editor/design-tofes/tofes-canvas/tofes-canvas';
import { BuildDragSidebar } from '../tavnit-editor/design-tofes/build-drag-sidebar/build-drag-sidebar';
import { DesignTofes } from '../tavnit-editor/design-tofes/design-tofes';
import { TavnitEditor } from '../tavnit-editor/tavnit-editor';

@Component({
  selector: 'app-home',
  imports: [TavniyotKayamotListComponent, TofesCanvas, BuildDragSidebar, DesignTofes, TavnitEditor],
  templateUrl: './home.html',
 styleUrl: './home.scss',
})
export class Home {

}
