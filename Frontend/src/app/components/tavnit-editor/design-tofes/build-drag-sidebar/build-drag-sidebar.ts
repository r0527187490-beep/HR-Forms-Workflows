
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { TavniyotService } from '../../../../services/tavniyot.service';
import { ControlType } from '../../../../models/enums/control-type.enum';
import { DraggableField } from './draggable-field/draggable-field';
import { FormControl } from '../../../../models/form-control.model';

export type FieldType = ControlType;

export interface FieldOption {
  id?: string;
  type: FieldType;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  smartFieldKey?: string | null;
  helpText?: string | null;
  defaultValue?: string | null;
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
    { type: ControlType.Text, label: 'טקסט קצר', required: false, readOnly: false },
    { type: ControlType.Paragraph, label: 'פסקה', required: false, readOnly: false },
    { type: ControlType.Date, label: 'תאריך', required: false, readOnly: false },
    { type: ControlType.File, label: 'העלאת קובץ', required: false, readOnly: false }
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
      next: (response: FormControl[]) => {
        this.smartFields = response.map(field => ({
          id: field.id || undefined,
          // השרת שולח את הסוג כשם (למשל "HR_Name"), וה-enum בקליינט מספרי, ולכן ממירים
          type: typeof field.type === 'string'
            ? ControlType[field.type as keyof typeof ControlType]
            : field.type,
          label: field.label,
          required: field.required,
          readOnly: true,
          smartFieldKey: field.smartFieldKey ?? null,
          helpText: field.helpText ?? null,
          defaultValue: field.defaultValue ?? null
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
