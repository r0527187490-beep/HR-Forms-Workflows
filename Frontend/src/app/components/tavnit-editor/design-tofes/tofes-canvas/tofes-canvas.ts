
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

import { FieldOption } from '../build-drag-sidebar/build-drag-sidebar';
import { RenderedControl } from './rendered-control/rendered-control';

// הגדרת פקד שמונח על משטח הטופס.
type CanvasField = FieldOption & {
  id: number;
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

  // הפניה למשטח הטופס ב-HTML.
  @ViewChild('canvasElement', { static: true })
  canvasElement!: ElementRef<HTMLDivElement>;

  // הפקדים שנמצאים כרגע על המשטח.
  fields: CanvasField[] = [];

  // שליחת הפקדים לקומפוננטה העוטפת.
  @Output() fieldsChange = new EventEmitter<CanvasField[]>();

  // שליחת מידות הקנבס.
  @Output() canvasSizeChange = new EventEmitter<{
    width: number;
    height: number;
  }>();

  // מזהה הפקד שנבחר.
  selectedFieldId: number | null = null;

  // גודל התחלתי של משטח הטופס.
  canvasWidth = 600;
  canvasHeight = 300;

  // מזהה אוטומטי לפקדים חדשים.
  private nextId = 1;

  // הפקד שנמצא בתהליך הזזה.
  private movingField: CanvasField | null = null;

  // הפקד שנמצא בתהליך שינוי גודל.
  private resizingField: CanvasField | null = null;

  // האם משנים את גודל משטח הטופס.
  private resizingCanvas = false;

  // מיקום העכבר בתחילת הפעולה.
  private pointerStartX = 0;
  private pointerStartY = 0;

  // מיקום הפקד בתחילת ההזזה.
  private initialX = 0;
  private initialY = 0;

  // מידות הפקד בתחילת שינוי הגודל.
  private initialWidth = 0;
  private initialHeight = 0;

  // מידות המשטח בתחילת שינוי הגודל.
  private canvasStartWidth = 600;
  private canvasStartHeight = 300;

  // שליחת מצב הקנבס המעודכן.
  private emitCanvasState(): void {
    this.fieldsChange.emit(
      this.fields.map(field => ({ ...field }))
    );

    this.canvasSizeChange.emit({
      width: this.canvasWidth,
      height: this.canvasHeight
    });
  }

  // הוספת פקד למשטח לאחר גרירה מהסרגל.
  drop(event: CdkDragDrop<CanvasField[], FieldOption[]>): void {
    const option = event.item.data;

    if (!option) {
      return;
    }

    const canvas = this.canvasElement.nativeElement;
    const rect = canvas.getBoundingClientRect();

    // גודל ברירת המחדל של פקד חדש.
    const width = 260;
    const height = 110;

    // חישוב מיקום הפקד בתוך המשטח.
    let x = event.dropPoint.x - rect.left - width / 2;
    let y = event.dropPoint.y - rect.top - 25;

    // שמירה על הפקד בתוך גבולות המשטח.
    x = this.clamp(
      x,
      0,
      Math.max(0, canvas.clientWidth - width)
    );

    y = this.clamp(
      y,
      0,
      Math.max(0, canvas.clientHeight - height)
    );

    // יצירת הפקד החדש.
    const newField: CanvasField = {
      ...option,
      id: this.nextId++,
      x,
      y,
      width,
      height
    };

    // הוספת הפקד ובחירתו.
    this.fields = [...this.fields, newField];
    this.selectedFieldId = newField.id;

    // שליחת המצב המעודכן.
    this.emitCanvasState();
  }

  // בחירת פקד בלחיצה עליו.
  selectField(event: PointerEvent, field: CanvasField): void {
    event.stopPropagation();
    this.selectedFieldId = field.id;
  }

  // ביטול הבחירה בלחיצה על שטח ריק.
  clearSelection(): void {
    if (
      !this.movingField &&
      !this.resizingField &&
      !this.resizingCanvas
    ) {
      this.selectedFieldId = null;
    }
  }

  // התחלת הזזת פקד.
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

    // שמירת מיקום העכבר והפקד.
    this.pointerStartX = event.clientX;
    this.pointerStartY = event.clientY;

    this.initialX = field.x;
    this.initialY = field.y;
  }

  // התחלת שינוי גודל של פקד.
  startResize(event: PointerEvent, field: CanvasField): void {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectedFieldId = field.id;
    this.movingField = null;
    this.resizingField = field;

    // שמירת מיקום העכבר והמידות ההתחלתיות.
    this.pointerStartX = event.clientX;
    this.pointerStartY = event.clientY;

    this.initialWidth = field.width;
    this.initialHeight = field.height;
  }

  // התחלת שינוי גודל משטח הטופס.
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

    // שמירת מיקום העכבר.
    this.pointerStartX = event.clientX;
    this.pointerStartY = event.clientY;

    // שמירת המידות הנוכחיות.
    this.canvasStartWidth = canvas.clientWidth;
    this.canvasStartHeight = canvas.clientHeight;

    this.canvasWidth = this.canvasStartWidth;
    this.canvasHeight = this.canvasStartHeight;
  }

  // טיפול בתנועת העכבר במהלך גרירה ושינוי גודל.
  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    const deltaX = event.clientX - this.pointerStartX;
    const deltaY = event.clientY - this.pointerStartY;

    const canvas = this.canvasElement.nativeElement;

    // שינוי גודל משטח הטופס.
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

    // הזזת פקד.
    if (this.movingField) {
      const field = this.movingField;

      const maxX = Math.max(
        0,
        canvas.clientWidth - field.width
      );

      const maxY = Math.max(
        0,
        canvas.clientHeight - field.height
      );

      field.x = this.clamp(
        this.initialX + deltaX,
        0,
        maxX
      );

      field.y = this.clamp(
        this.initialY + deltaY,
        0,
        maxY
      );

      this.emitCanvasState();
      return;
    }

    // שינוי גודל של פקד.
    if (this.resizingField) {
      const field = this.resizingField;

      const maxWidth = Math.max(
        180,
        canvas.clientWidth - field.x
      );

      const maxHeight = Math.max(
        70,
        canvas.clientHeight - field.y
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

  // סיום הפעולה כשהעכבר משתחרר או כשהפעולה מתבטלת.
  @HostListener('document:pointerup')
  @HostListener('document:pointercancel')
  onPointerUp(): void {
    this.movingField = null;
    this.resizingField = null;
    this.resizingCanvas = false;
  }

  // מחיקת פקד מהמשטח.
  removeField(id: number): void {
    this.fields = this.fields.filter(
      field => field.id !== id
    );

    if (this.selectedFieldId === id) {
      this.selectedFieldId = null;
    }

    this.emitCanvasState();
  }

  // הגבלת מספר לטווח המותר.
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
