
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList
} from '@angular/cdk/drag-drop';

import { RenderedControl } from './rendered-control/rendered-control';
import { FormControl } from '../../../../models/form-control.model';


// פקד שמונח על משטח הטופס, בהתאם למודל השרת.
type CanvasField = FormControl & {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

@Component({
  selector: 'app-tofes-canvas',
  standalone: true,
  imports: [CommonModule, CdkDropList, RenderedControl],
  templateUrl: './tofes-canvas.html',
  styleUrl: './tofes-canvas.scss'
})
export class TofesCanvas {
  @ViewChild('canvasElement', { static: true })
  canvasElement!: ElementRef<HTMLDivElement>;

  fields: CanvasField[] = [];

  @Output() fieldsChange = new EventEmitter<CanvasField[]>();

  @Output() canvasSizeChange = new EventEmitter<{
    width: number;
    height: number;
  }>();

  selectedFieldId: string | null = null;

  canvasWidth = 600;
  canvasHeight = 300;

  private nextId = 1;

  private movingField: CanvasField | null = null;
  private resizingField: CanvasField | null = null;
  private resizingCanvas = false;

  private pointerStartX = 0;
  private pointerStartY = 0;

  private initialX = 0;
  private initialY = 0;

  private initialWidth = 0;
  private initialHeight = 0;

  private canvasStartWidth = 600;
  private canvasStartHeight = 300;

  private emitCanvasState(): void {
    this.fieldsChange.emit(
      this.fields.map(field => ({ ...field }))
    );

    this.canvasSizeChange.emit({
      width: this.canvasWidth,
      height: this.canvasHeight
    });
  }

  // הוספת פקד מהסרגל למשטח.
  drop(event: CdkDragDrop<CanvasField[], FormControl[]>): void {
    const option = event.item.data;

    if (!option) {
      return;
    }

    const canvas = this.canvasElement.nativeElement;
    const rect = canvas.getBoundingClientRect();

    const width = 260;
    const height = 110;

    let x = event.dropPoint.x - rect.left - width / 2;
    let y = event.dropPoint.y - rect.top - 25;

    x = this.clamp(
      x,
      0,
      Math.max(0, this.canvasWidth - width)
    );

    y = this.clamp(
      y,
      0,
      Math.max(0, this.canvasHeight - height)
    );

    // מזהה ייחודי כמחרוזת, כפי שמוגדר במודל FormControl.
    const id = `field-${this.nextId++}`;

    const newField: CanvasField = {
      id,
      type: option.type,
      label: option.label,
      required: option.required ?? false,
      readOnly: option.readOnly ?? false,
      smartFieldKey: option.smartFieldKey ?? null,
      helpText: option.helpText ?? null,
      defaultValue: option.defaultValue ?? null,
      x,
      y,
      width,
      height
    };

    this.fields = [...this.fields, newField];
    this.selectedFieldId = newField.id;

    this.emitCanvasState();
  }

  selectField(event: PointerEvent, field: CanvasField): void {
    event.stopPropagation();
    this.selectedFieldId = field.id;
  }

  clearSelection(): void {
    if (
      !this.movingField &&
      !this.resizingField &&
      !this.resizingCanvas
    ) {
      this.selectedFieldId = null;
    }
  }

  startMove(event: PointerEvent, field: CanvasField): void {
    if (
      event.button !== 0 ||
      this.resizingField ||
      this.resizingCanvas
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectedFieldId = field.id;
    this.movingField = field;

    this.pointerStartX = event.clientX;
    this.pointerStartY = event.clientY;

    this.initialX = field.x;
    this.initialY = field.y;
  }

  startResize(event: PointerEvent, field: CanvasField): void {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectedFieldId = field.id;
    this.movingField = null;
    this.resizingField = field;

    this.pointerStartX = event.clientX;
    this.pointerStartY = event.clientY;

    this.initialWidth = field.width;
    this.initialHeight = field.height;
  }

  startCanvasResize(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const canvas = this.canvasElement.nativeElement;

    this.selectedFieldId = null;
    this.movingField = null;
    this.resizingField = null;
    this.resizingCanvas = true;

    this.pointerStartX = event.clientX;
    this.pointerStartY = event.clientY;

    this.canvasStartWidth = canvas.clientWidth;
    this.canvasStartHeight = canvas.clientHeight;

    this.canvasWidth = this.canvasStartWidth;
    this.canvasHeight = this.canvasStartHeight;
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    const deltaX = event.clientX - this.pointerStartX;
    const deltaY = event.clientY - this.pointerStartY;

    const canvas = this.canvasElement.nativeElement;

    if (this.resizingCanvas) {
      const minWidth = Math.max(
        400,
        ...this.fields.map(field => field.x + field.width + 20)
      );

      const minHeight = Math.max(
        300,
        ...this.fields.map(field => field.y + field.height + 20)
      );

      this.canvasWidth = this.clamp(
        this.canvasStartWidth + deltaX,
        minWidth,
        2000
      );

      this.canvasHeight = this.clamp(
        this.canvasStartHeight + deltaY,
        minHeight,
        1600
      );

      this.emitCanvasState();
      return;
    }

    if (this.movingField) {
      const field = this.movingField;

      field.x = this.clamp(
        this.initialX + deltaX,
        0,
        Math.max(0, this.canvasWidth - field.width)
      );

      field.y = this.clamp(
        this.initialY + deltaY,
        0,
        Math.max(0, this.canvasHeight - field.height)
      );

      this.emitCanvasState();
      return;
    }

    if (this.resizingField) {
      const field = this.resizingField;

      const maxWidth = Math.max(
        180,
        this.canvasWidth - field.x
      );

      const maxHeight = Math.max(
        70,
        this.canvasHeight - field.y
      );

      field.width = this.clamp(
        this.initialWidth + deltaX,
        180,
        maxWidth
      );

      field.height = this.clamp(
        this.initialHeight + deltaY,
        70,
        maxHeight
      );

      this.emitCanvasState();
    }
  }

  @HostListener('document:pointerup')
  @HostListener('document:pointercancel')
  onPointerUp(): void {
    this.movingField = null;
    this.resizingField = null;
    this.resizingCanvas = false;
  }

  removeField(id: string): void {
    this.fields = this.fields.filter(field => field.id !== id);

    if (this.selectedFieldId === id) {
      this.selectedFieldId = null;
    }

    this.emitCanvasState();
  }

  private clamp(
    value: number,
    min: number,
    max: number
  ): number {
    return Math.min(
      Math.max(value, min),
      Math.max(min, max)
    );
  }
}
