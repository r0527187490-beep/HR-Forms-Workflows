
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FieldOption } from '../build-drag-sidebar';

@Component({
  selector: 'app-draggable-field',
  standalone: true,
  imports: [NgIf],
  templateUrl: './draggable-field.html',
  styleUrl: './draggable-field.scss'
})
export class DraggableField {
  @Input({ required: true }) field!: FieldOption;

  private get type(): string {
    return String(this.field.type);
  }

  isHRName(): boolean {
    return ['HR_Name', 'employeeName'].includes(this.type);
  }

  isHRId(): boolean {
    return ['HR_Id', 'employeeId'].includes(this.type);
  }

  isHRDepartment(): boolean {
    return ['HR_Department', 'department'].includes(this.type);
  }

  isBasic(type: string): boolean {
    return this.type === type;
  }
}
