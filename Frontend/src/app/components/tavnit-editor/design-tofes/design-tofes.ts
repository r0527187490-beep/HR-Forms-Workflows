
import { Component, EventEmitter, Output } from '@angular/core';
import { BuildDragSidebar } from './build-drag-sidebar/build-drag-sidebar';
import { TofesCanvas } from './tofes-canvas/tofes-canvas';

@Component({
  selector: 'app-design-tofes',
  standalone: true,
  imports: [BuildDragSidebar, TofesCanvas],
  templateUrl: './design-tofes.html',
  styleUrl: './design-tofes.scss'
})
export class DesignTofes {

  // הפקדים שנמצאים על הקנבס
  fields: any[] = [];

  // מידות הקנבס
  canvasWidth = 600;
  canvasHeight = 300;

  // העברת הפקדים לקומפוננטה שמכילה את המעצב
  @Output() fieldsChange = new EventEmitter<any[]>();

  // העברת מידות הקנבס לקומפוננטה שמכילה את המעצב
  @Output() canvasSizeChange =
    new EventEmitter<{ width: number; height: number }>();

  // עדכון הפקדים בכל גרירה, שינוי גודל או הוספה
  onFieldsChange(fields: any[]): void {
    this.fields = fields.map(field => ({ ...field }));
    this.fieldsChange.emit(this.fields);
  }

  // עדכון מידות הקנבס
  updateCanvasSize(size: { width: number; height: number }): void {
    this.canvasWidth = size.width;
    this.canvasHeight = size.height;

    this.canvasSizeChange.emit({
      width: this.canvasWidth,
      height: this.canvasHeight
    });
  }
}
