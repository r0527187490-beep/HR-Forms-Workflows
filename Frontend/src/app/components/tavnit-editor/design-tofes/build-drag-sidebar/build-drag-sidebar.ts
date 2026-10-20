
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { TavniyotService } from '../../../../services/tavniyot.service';
import { ControlType } from '../../../../models/enums/control-type.enum';
import { DraggableField } from './draggable-field/draggable-field';
import { FormControl } from '../../../../models/form-control.model';

@Component({
  selector: 'app-build-drag-sidebar',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, DraggableField],
  templateUrl: './build-drag-sidebar.html',
  styleUrl: './build-drag-sidebar.scss'
})
export class BuildDragSidebar implements OnInit {
  private readonly tavniyotService = inject(TavniyotService);

  // הפקדים הבסיסיים נטענים מהשרת (GetBasicControlsList).
  fields: FormControl[] = [];
  basicFieldsError = false;

  smartFields: FormControl[] = [];
  loadingSmartFields = false;
  smartFieldsError = false;

  ngOnInit(): void {
    this.loadBasicFields();
    this.loadSmartFields();
  }

  private loadBasicFields(): void {
    this.basicFieldsError = false;

    this.tavniyotService.GetBasicControlsList().subscribe({
      next: (response: FormControl[]) => {
        this.fields = response.map(field => ({
          ...field,
          // השרת שולח את הסוג כשם (למשל "Paragraph"), וה-enum בקליינט מספרי, ולכן ממירים
          type: typeof field.type === 'string'
            ? ControlType[field.type as keyof typeof ControlType]
            : field.type
        }));
      },
      error: error => {
        console.error('Failed to load basic controls', error);
        this.basicFieldsError = true;
      }
    });
  }

  private loadSmartFields(): void {
    this.loadingSmartFields = true;
    this.smartFieldsError = false;

    this.tavniyotService.GetSmartFieldsList().subscribe({
      next: (response: FormControl[]) => {
        this.smartFields = response.map(field => ({
          ...field,
          // השרת שולח את הסוג כשם (למשל "HR_Name"), וה-enum בקליינט מספרי, ולכן ממירים
          type: typeof field.type === 'string'
            ? ControlType[field.type as keyof typeof ControlType]
            : field.type,
          readOnly: true
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
