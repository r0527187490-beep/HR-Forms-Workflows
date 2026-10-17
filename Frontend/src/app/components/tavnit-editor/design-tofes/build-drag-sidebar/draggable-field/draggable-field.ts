
import { Component, Input } from '@angular/core';
import { FieldOption } from '../build-drag-sidebar';

@Component({
  selector: 'app-draggable-field',
  standalone: true,
  templateUrl: './draggable-field.html',
  styleUrl: './draggable-field.scss'
})
export class DraggableField {
  // מקבל את הגדרות הפקד מסרגל הצד.
  @Input({ required: true }) field!: FieldOption;
}
