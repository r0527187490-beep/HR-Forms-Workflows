import {
  Component,
  ElementRef,
  inject,
  ViewChild
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { finalize } from 'rxjs';
import { TavniyotService } from '../../services/tavniyot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignTofes } from './design-tofes/design-tofes';
import { TatzugaMakdimaModal } from './tatzuga-makdima-modal/tatzuga-makdima-modal';
import { HtmlCodeEditor } from './design-tofes/html-code-editor/html-code-editor';
import { FormDetails } from '../../models/form-details.model';

type EditorTab = 'builder' | 'html';

@Component({
  selector: 'app-tavnit-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DesignTofes,
    TatzugaMakdimaModal,
    HtmlCodeEditor,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  templateUrl: './tavnit-editor.html',
  styleUrl: './tavnit-editor.scss'
})
export class TavnitEditor {

  private confirmationService = inject(ConfirmationService);

  @ViewChild('nameInput')
  nameInput?: ElementRef<HTMLInputElement>;

  // מאפשר לאפס את הקנבס (הוא מחזיק את הפקדים בזיכרון של עצמו).
  showBuilder = true;

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

  // מזהה התבנית מהשרת. ריק עד השמירה הראשונה.
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

  // בדיקות ואישור לפני שמירה.
  publishForm(isPail: boolean = true): void {
    if (this.isSaving) {
      return;
    }

    this.finishEditingName();

    const enteredName = this.shemTofes.trim();

    if (!enteredName) {
      alert('יש להזין שם לטופס.');
      return;
    }

    const fullFormName = /^טופס(?:\s|$)/.test(enteredName)
      ? enteredName
      : `טופס ${enteredName}`;

    const isHtmlTab = this.activeTab === 'html';
    const savedMode = isHtmlTab ? 'HTML' : 'גרירה';

    const hasFields = this.previewFields.length > 0;
    const hasHtml = this.htmlCode.trim().length > 0;
    const hasBoth = hasFields && hasHtml;

    const action = isPail ? 'לפרסם' : 'לשמור כטיוטה';

    // אם יש תוכן בשני הטאבים מתווספת אזהרה
    const message = hasBoth
      ? `הטופס יישמר במצב ${savedMode}. התוכן במצב האחר יימחק. להמשיך?`
      : `האם ${action} את הטופס?`;

    this.confirmationService.confirm({
      header: isPail ? 'פרסום הטופס' : 'שמירה כטיוטה',
      message,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'כן',
      rejectLabel: 'לא',
      accept: () => this.saveToServer(isPail, fullFormName)
    });
  }

  // מוחק את התוכן של הצד שלא נשמר.
  private clearOtherMode(savedMode: EditorTab): void {
    if (savedMode === 'html') {
      // נשמר HTML: מוחקים את הבנייה בגרירה
      this.previewFields = [];
      this.previewCanvasWidth = 600;
      this.previewCanvasHeight = 300;

      // הורסים ובונים מחדש את הקנבס, כדי שהפקדים שבתוכו יימחקו
      this.showBuilder = false;
      setTimeout(() => (this.showBuilder = true));
    } else {
      // נשמרה גרירה: מוחקים את קוד ה-HTML
      this.htmlCode = '';
    }
  }

  // השמירה עצמה בשרת.
  private saveToServer(isPail: boolean, fullFormName: string): void {
    // ✏️ שונה: הוגדר בתחילת הפונקציה, לפני השימוש
    const isHtmlTab = this.activeTab === 'html';
    const savedMode: EditorTab = isHtmlTab ? 'html' : 'builder';

    const controlTypeMap: Record<number, string> = {
      0: 'Text',
      1: 'Paragraph',
      2: 'Date',
      3: 'File',
      4: 'Number'
    };

    const controls = this.previewFields.map((field, index) => ({
      id: String(field.id ?? `field-${index + 1}`),
      type: typeof field.type === 'number'
        ? controlTypeMap[field.type]
        : field.type,
      isSmartField: Boolean(field.isSmartField),
      readOnly: Boolean(field.isSmartField),
      smartFieldKey: field.isSmartField && field.smartFieldKey != null
        ? Number(field.smartFieldKey)
        : null,
      label: field.label,
      required: Boolean(field.required),
      helpText: field.helpText ?? null,
      defaultValue: field.defaultValue ?? null,
      x: Number(field.x ?? 0),
      y: Number(field.y ?? 0),
      width: Number(field.width ?? 180),
      height: Number(field.height ?? 50)
    }));

    if (!isHtmlTab && controls.some(field => !field.type)) {
      alert('נמצא פקד עם סוג לא מוכר. לא ניתן לשמור את הטופס.');
      return;
    }

    const details: FormDetails = {
      idRecTavnit: this.idRecTavnit,
      shemTofes: fullFormName,
      teur: this.teur.trim() || null,
      isPail: isPail,
      tochenHtml: isHtmlTab ? this.htmlCode : null,
      form: isHtmlTab
        ? null
        : {
            controls,
            canvasWidth: this.previewCanvasWidth,
            canvasHeight: this.previewCanvasHeight
          }
    };

    this.isSaving = true;

    this.tavniyotService.saveForm(details)
      .pipe(finalize(() => { this.isSaving = false; }))
      .subscribe({
        next: response => {
          this.idRecTavnit = response.idRecTavnit ?? null;

          // ➕ נוסף: מחיקת הצד השני רק אחרי שהשרת אישר
          this.clearOtherMode(savedMode);

          alert(
            isPail
              ? 'הטופס פורסם בהצלחה!'
              : 'הטופס נשמר כטיוטה בהצלחה!');
        },
        error: error => {
          console.error('שגיאה בשמירת הטופס:', error);
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