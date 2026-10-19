import { Component, Input } from '@angular/core';
// מאפשר להשתמש ב-ngSwitch, ב-ngSwitchCase וב-ngSwitchDefault.
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rendered-control',
  // הקומפוננטה עצמאית ולכן צריך לייבא את CommonModule כאן.
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rendered-control.html',
  styleUrl: './rendered-control.scss'
})
export class RenderedControl {
  // מקבל את הפקד שמוצג על משטח העבודה.
  @Input({ required: true })
  field!: { id: number; type: string; label: string };

  // טקסט שמסביר שהשדה החכם יתמלא ממערכת הארגון.
  get smartPlaceholder(): string {
    return 'יתמלא אוטומטית ממערכת הארגון';
  }
}