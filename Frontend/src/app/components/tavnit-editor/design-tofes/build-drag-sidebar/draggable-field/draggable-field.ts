
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

  isHRName(): boolean {
    return this.field.type === ControlType.HR_Name;
  }

  isHRId(): boolean {
    return this.field.type === ControlType.HR_Id;
  }

  isHRDepartment(): boolean {
    return this.field.type === ControlType.HR_Department;
  }

isBasic(type: string): boolean {
  const aliases: Record<string, ControlType> = {
    text: ControlType.Text,
    textarea: ControlType.Paragraph,
    date: ControlType.Date,
    file: ControlType.File
  };

  const expectedType = aliases[type];

  return expectedType !== undefined
    && this.field.type === expectedType;
}
}
