import {
  Component,
  ElementRef,
  inject,
  ViewChild
} from '@angular/core';
import { finalize } from 'rxjs';
import { TavniyotService } from '../../services/tavniyot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignTofes } from './design-tofes/design-tofes';
import { TatzugaMakdimaModal } from './tatzuga-makdima-modal/tatzuga-makdima-modal';

type EditorTab = 'builder' | 'html';

@Component({
  selector: 'app-tavnit-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DesignTofes,
    TatzugaMakdimaModal
  ],
  templateUrl: './tavnit-editor.html',
  styleUrl: './tavnit-editor.scss'
})
export class TavnitEditor {

  @ViewChild('nameInput')
  nameInput?: ElementRef<HTMLInputElement>;

  // הלשונית הפעילה.
  activeTab: EditorTab = 'builder';

  // שם הטופס בלבד, ללא המילה הקבועה "טופס".
  shemTofes = '';

  // האם עורכים את שם הטופס.
  isEditingName = false;

  // גיבוי השם לצורך ביטול העריכה.
  private previousFormName = '';

  // הפקדים לתצוגה המקדימה.
  previewFields: any[] = [];

  // מידות הקנבס.
  previewCanvasWidth = 600;
  previewCanvasHeight = 300;

  // מצב חלון התצוגה המקדימה.
  isPreviewOpen = false;

  // השירות שמבצע את השמירה בשרת.
  private tavniyotService = inject(TavniyotService);

  // מונע לחיצה כפולה בזמן השמירה.
  isSaving = false;
  // מעבר בין לשוניות.
  selectTab(tab: EditorTab): void {
    this.activeTab = tab;
  }

  // התחלת עריכת שם הטופס.
  startEditingName(): void {
    if (this.isEditingName) {
      return;
    }

    this.previousFormName = this.shemTofes;
    this.isEditingName = true;

    // מיקוד בשדה לאחר הצגתו.
    setTimeout(() => {
      this.nameInput?.nativeElement.focus();
      this.nameInput?.nativeElement.select();
    });
  }

  // שמירת השם בסיום העריכה.
  finishEditingName(): void {
    this.shemTofes = this.shemTofes.trim();
    this.isEditingName = false;
  }

  // ביטול העריכה.
  cancelEditingName(): void {
    this.shemTofes = this.previousFormName;
    this.isEditingName = false;
  }

  // פתיחת תצוגה מקדימה.
  openPreview(): void {
    this.isPreviewOpen = true;
  }

  // סגירת תצוגה מקדימה.
  closePreview(): void {
    this.isPreviewOpen = false;
  }

  // עדכון הפקדים.
  onPreviewFieldsChange(fields: any[]): void {
    this.previewFields = fields.map(field => ({ ...field }));
  }

  // עדכון מידות הקנבס.
  onPreviewCanvasSizeChange(
    size: { width: number; height: number }
  ): void {
    this.previewCanvasWidth = size.width;
    this.previewCanvasHeight = size.height;
  }

  // שמירת הטופס בשרת.
  publishForm(): void {
    // לא מאפשרים שמירה כפולה.
    if (this.isSaving) {
      return;
    }

    // מסיימים עריכת שם לפני השמירה.
    this.finishEditingName();

    const enteredName = this.shemTofes.trim();

    // חובה להזין שם לטופס.
    if (!enteredName) {
      alert('יש להזין שם לטופס.');
      return;
    }

    // מבטיחים שהשם שנשלח לשרת כולל את המילה "טופס".
    const fullFormName = /^טופס(?:\s|$)/.test(enteredName)
      ? enteredName
      : `טופס ${enteredName}`;

    // מכינים את פרטי הטופס ואת הפקדים.
    const details = {
      shemTofes: fullFormName,
      form: {
        controls: this.previewFields.map(field => ({ ...field }))
      }
    };

    // מתחילים שמירה.
    this.isSaving = true;

    this.tavniyotService.saveForm(details)
      .pipe(
        finalize(() => {
          this.isSaving = false;
        })
      )
      .subscribe({
        next: () => {
          alert('הטופס נשמר בהצלחה!');
        },

        error: error => {
          console.error('שגיאה בשמירת הטופס:', error);
          console.error('סטטוס:', error.status);
          console.error('תגובת השרת:', error.error);

          alert(
            `השמירה נכשלה.\nסטטוס: ${error.status}\n` +
            `${JSON.stringify(error.error)}`
          );
        }
      }
      );
  }

  // מניעת ניווט.
  onBackLink(event: MouseEvent): void {
    event.preventDefault();
  }

  openFormDesign(event: MouseEvent): void {
    event.preventDefault();
  }

  openWorkflows(event: MouseEvent): void {
    event.preventDefault();
  }
}
