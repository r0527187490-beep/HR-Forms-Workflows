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
import { HtmlCodeEditor } from './design-tofes/html-code-editor/html-code-editor';

type EditorTab = 'builder' | 'html';

@Component({
  selector: 'app-tavnit-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DesignTofes,
    TatzugaMakdimaModal,
    HtmlCodeEditor
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

  // קוד ה-HTML שנכתב בעורך.
  htmlCode = '';

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

  // מזהה התבנית מהשרת. ריק עד השמירה הראשונה, ואז כל שמירה יוצרת גרסה חדשה של אותה תבנית.
  // מזהה התבנית מהשרת. ריק עד השמירה הראשונה, ואז כל שמירה יוצרת גרסה חדשה של אותה תבנית.
  private idRecTavnit: number | null = null;

  // הערה כללית על הטופס (נשמרת בתבנית).
  teur = '';

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
  // קבלת הקוד מעורך ה-HTML.
  onHtmlChange(html: string): void {
    this.htmlCode = html;
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
    // מניעת שמירה כפולה.
    if (this.isSaving) {
      return;
    }

    // סיום עריכת שם הטופס.
    this.finishEditingName();

    const enteredName = this.shemTofes.trim();

    // בדיקת שם חובה.
    if (!enteredName) {
      alert('יש להזין שם לטופס.');
      return;
    }

    // שם מלא הכולל את המילה "טופס".
    const fullFormName = /^טופס(?:\s|$)/.test(enteredName)
      ? enteredName
      : `טופס ${enteredName}`;

    // המרה מה-enum המספרי לשמות שהשרת מצפה לקבל.
    const controlTypeMap: Record<number, string> = {
      0: 'Text',
      1: 'Paragraph',
      2: 'Date',
      3: 'File',
      4: 'HR_Name',
      5: 'HR_Id',
      6: 'HR_Department'
    };

    // התאמת הפקדים למודל FormControl של השרת.
    const controls = this.previewFields.map((field, index) => ({
      id: String(field.id ?? `field-${index + 1}`),

      type: typeof field.type === 'number'
        ? controlTypeMap[field.type]
        : field.type,

      label: field.label,
      required: Boolean(field.required),
      readOnly: Boolean(field.readOnly),

      smartFieldKey: field.smartFieldKey ?? null,
      helpText: field.helpText ?? null,
      defaultValue: field.defaultValue ?? null,

      // מיקום הפקד בקנבס.
      x: Number(field.x ?? 0),
      y: Number(field.y ?? 0),

      // מידות הפקד.
      width: Number(field.width ?? 180),
      height: Number(field.height ?? 50)
    }));

    // בדיקה שסוגי הפקדים תקינים.
    if (controls.some(field => !field.type)) {
      alert('נמצא פקד עם סוג לא מוכר. לא ניתן לשמור את הטופס.');
      return;
    }

    // בניית FormDetails בהתאם למודל שסיפקת.
    const details = {
      idRecTavnit: this.idRecTavnit,
      shemTofes: fullFormName,
      teur: this.teur.trim() || null,
      form: {
        controls,
        canvasWidth: this.previewCanvasWidth,
        canvasHeight: this.previewCanvasHeight
      }
    };

    // התחלת שמירה.
    this.isSaving = true;

    this.tavniyotService.saveForm(details)
      .pipe(
        finalize(() => {
          this.isSaving = false;
        })
      )
      .subscribe({
        next: response => {
          this.idRecTavnit = response.idRecTavnit ?? null;
          console.log('הטופס נשמר:', response);
          alert('הטופס נשמר בהצלחה!');
        },

        error: error => {
          console.error('שגיאה בשמירת הטופס:', error);
          console.error('סטטוס:', error.status);
          console.error('תגובת השרת:', error.error);

          alert(
            `שמירת הטופס נכשלה.\n` +
            `סטטוס: ${error.status}\n` +
            `${typeof error.error === 'string'
              ? error.error
              : JSON.stringify(error.error)}`
          );
        }
      });
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
