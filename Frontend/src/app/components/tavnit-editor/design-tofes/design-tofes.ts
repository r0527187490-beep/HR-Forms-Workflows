
import { Component, EventEmitter, Output } from '@angular/core';

import { BuildDragSidebar } from './build-drag-sidebar/build-drag-sidebar';
import { TofesCanvas } from './tofes-canvas/tofes-canvas';
import { FormControl } from '../../../models/form-control.model';

export type CanvasField = FormControl & {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

@Component({
  selector: 'app-design-tofes',
  standalone: true,
  imports: [BuildDragSidebar, TofesCanvas],
  templateUrl: './design-tofes.html',
  styleUrl: './design-tofes.scss'
})
export class DesignTofes {
  fields: CanvasField[] = [];

  canvasWidth = 600;
  canvasHeight = 300;

  @Output() fieldsChange = new EventEmitter<CanvasField[]>();

  @Output() canvasSizeChange =
    new EventEmitter<{ width: number; height: number }>();

  onFieldsChange(fields: CanvasField[]): void {
    this.fields = fields.map(field => ({ ...field }));
    this.fieldsChange.emit(this.fields);
  }

  updateCanvasSize(size: { width: number; height: number }): void {
    this.canvasWidth = size.width;
    this.canvasHeight = size.height;

    this.canvasSizeChange.emit({
      width: this.canvasWidth,
      height: this.canvasHeight
    });
  }
}
