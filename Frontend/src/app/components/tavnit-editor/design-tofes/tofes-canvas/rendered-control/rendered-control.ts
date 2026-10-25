import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlType } from '../../../../../models/enums/control-type.enum';
import { FormControl } from '../../../../../models/form-control.model';

@Component({
  selector: 'app-rendered-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rendered-control.html',
  styleUrl: './rendered-control.scss'
})
export class RenderedControl {
  @Input({ required: true })
  field!: FormControl;

  // true בתצוגה המקדימה: כותרת כטקסט בלבד
  @Input()
  labelReadonly = false;

  // מודיע להורה שהכותרת השתנתה
  @Output()
  labelChange = new EventEmitter<{ id: string; label: string }>();

  readonly ControlType = ControlType;

  get smartPlaceholder(): string {
    return 'יתמלא אוטומטית ממערכת הארגון';
  }

  // פקד חכם מזוהה רק לפי הסימון שמגיע מהשרת, לא לפי הסוג
  get isSmartField(): boolean {
    return !!this.field?.isSmartField;
  }

  // עריכת כותרת: רק בפקד בסיסי ורק בעורך
  get canEditLabel(): boolean {
    return !this.labelReadonly && !this.isSmartField;
  }

  onLabelChange(event: Event): void {
    if (!this.canEditLabel) {
      return;
    }

    const value = (event.target as HTMLInputElement).value;
    this.field.label = value;
    this.labelChange.emit({ id: this.field.id, label: value });
  }
}