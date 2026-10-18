import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderedControl } from '../design-tofes/tofes-canvas/rendered-control/rendered-control';

@Component({
  selector: 'app-tatzuga-makdima-modal',
  standalone: true,
  imports: [CommonModule, RenderedControl],
  templateUrl: './tatzuga-makdima-modal.html',
  styleUrl: './tatzuga-makdima-modal.scss'
})
export class TatzugaMakdimaModal {

  // הפקדים שהועברו מהעורך
  @Input() fields: any[] = [];

  // מידות הקנבס המקורי
  @Input() canvasWidth = 600;
  @Input() canvasHeight = 300;

  // האם החלון פתוח
  @Input() isOpen = false;

  // אירוע לסגירת החלון
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
