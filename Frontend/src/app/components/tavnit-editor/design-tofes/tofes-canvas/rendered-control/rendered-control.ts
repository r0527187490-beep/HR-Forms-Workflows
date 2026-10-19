
import { Component, Input } from '@angular/core';
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

  // מאפשר להשתמש בערכי ה-enum בתוך ה-HTML.
  readonly ControlType = ControlType;

  // טקסט שמסביר שהשדה החכם יתמלא ממערכת הארגון.
  get smartPlaceholder(): string {
    return 'יתמלא אוטומטית ממערכת הארגון';
  }

  // בודק אם הפקד הוא שדה HR חכם.
  get isSmartField(): boolean {
    return [
      ControlType.HR_Name,
      ControlType.HR_Id,
      ControlType.HR_Department
    ].includes(this.field.type);
  }
}
