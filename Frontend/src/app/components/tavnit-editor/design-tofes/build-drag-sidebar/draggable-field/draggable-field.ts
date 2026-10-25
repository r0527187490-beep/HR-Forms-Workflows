import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { FormControl } from '../../../../../models/form-control.model';
import { ControlType } from '../../../../../models/enums/control-type.enum';

@Component({
  selector: 'app-draggable-field',
  standalone: true,
  imports: [NgIf],
  templateUrl: './draggable-field.html',
  styleUrl: './draggable-field.scss'
})
export class DraggableField {
  @Input({ required: true }) field!: FormControl;

  // פקד חכם מזוהה לפי הסימון מהשרת
  get isSmartField(): boolean {
    return !!this.field?.isSmartField;
  }

  isBasic(type: string): boolean {
    if (this.isSmartField) {
      return false;
    }

    const aliases: Record<string, ControlType> = {
      text: ControlType.Text,
      textarea: ControlType.Paragraph,
      date: ControlType.Date,
      file: ControlType.File,
      number: ControlType.Number
    };

    const expectedType = aliases[type];

    return expectedType !== undefined
      && this.field.type === expectedType;
}
}