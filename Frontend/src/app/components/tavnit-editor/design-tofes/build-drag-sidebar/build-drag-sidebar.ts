import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { TavniyotService } from '../../../../services/tavniyot.service';
import { ControlType } from '../../../../models/enums/control-type.enum';
import { FormControl as SmartFormControl } from '../../../../models/form-control';
import { DraggableField } from './draggable-field/draggable-field';

export type FieldType =
  | 'text'
  | 'textarea'
  | 'date'
  | 'file'
  | ControlType.HR_Name
  | ControlType.HR_Id
  | ControlType.HR_Department;

export interface FieldOption {
  type: FieldType;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  smartFieldKey?: string | null;
}

@Component({
  selector: 'app-build-drag-sidebar',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, DraggableField],
  templateUrl: './build-drag-sidebar.html',
  styleUrl: './build-drag-sidebar.scss'
})
export class BuildDragSidebar implements OnInit {
  private readonly tavniyotService = inject(TavniyotService);

  fields: FieldOption[] = [
    { type: 'text', label: 'טקסט קצר' },
    { type: 'textarea', label: 'פסקה' },
    { type: 'date', label: 'תאריך' },
    { type: 'file', label: 'העלאת קובץ' }
  ];

  smartFields: FieldOption[] = [];
  loadingSmartFields = false;
  smartFieldsError = false;

  ngOnInit(): void {
    this.loadSmartFields();
  }

  private loadSmartFields(): void {
    this.loadingSmartFields = true;
    this.smartFieldsError = false;

    this.tavniyotService.GetSmartFieldsList().subscribe({
      next: (response: SmartFormControl[]) => {
        this.smartFields = response.map(field => ({
          type: field.type as FieldType,
          label: field.label,
          required: field.required,
          readOnly: true,
          smartFieldKey: field.smartFieldKey ?? null
        }));

        this.loadingSmartFields = false;
      },
      error: error => {
        console.error('Failed to load Smart Fields', error);
        this.smartFieldsError = true;
        this.loadingSmartFields = false;
      }
    });
  }
}