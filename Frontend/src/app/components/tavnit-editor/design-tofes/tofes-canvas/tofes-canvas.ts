import { CommonModule } from '@angular/common'; // מאפשר שימוש ב-*ngFor וב-*ngIf בתבנית.
import {
  Component,   
  ElementRef,  
  HostListener,
  ViewChild    
} from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop'; // תמיכה בגרירה ושחרור של פקדים.

import { FieldOption } from '../build-drag-sidebar/build-drag-sidebar'; // טיפוס הפקד שמגיע מסרגל הפקדים.
import { RenderedControl } from './rendered-control/rendered-control'; // קומפוננטה שמציגה פקד בודד.

type CanvasField = FieldOption & {
  id: number;     // מזהה ייחודי לפקד.
  x: number;      // מיקום אופקי.
  y: number;      // מיקום אנכי.
  width: number;  // רוחב הפקד.
  height: number; // גובה הפקד.
};

@Component({
  selector: 'app-tofes-canvas', // שם הקומפוננטה לשימוש ב-HTML.
  standalone: true,             // קומפוננטה עצמאית.
  imports: [CommonModule, CdkDropList, RenderedControl], // התלויות שהקומפוננטה משתמשת בהן.
  templateUrl: './tofes-canvas.html', // קובץ ה-HTML.
  styleUrl: './tofes-canvas.scss'     // קובץ העיצוב.
})
export class TofesCanvas {
  @ViewChild('canvasElement', { static: true })
  canvasElement!: ElementRef<HTMLDivElement>; // הפניה למשטח העבודה ב-HTML.

  fields: CanvasField[] = []; // מערך זמני של הפקדים בטופס בזמן העריכה.
  selectedFieldId: number | null = null; // מזהה הפקד שנבחר כרגע.

  canvasWidth: number | null = null; // רוחב המשטח; null פירושו רוחב ברירת מחדל.
  canvasHeight = 650; // גובה התחלתי של המשטח בפיקסלים.

  private nextId = 1; // המספר הבא שיוקצה לפקד חדש.
  private movingField: CanvasField | null = null; // הפקד שמוזז כרגע.
  private resizingField: CanvasField | null = null; // הפקד שמשנים את גודלו.
  private resizingCanvas = false; // האם משנים את גודל המשטח.

  private pointerStartX = 0; // מיקום אופקי של העכבר בתחילת הפעולה.
  private pointerStartY = 0; // מיקום אנכי של העכבר בתחילת הפעולה.

  private initialX = 0; // המיקום ההתחלתי של הפקד.
  private initialY = 0;
  private initialWidth = 0; // הגודל ההתחלתי של הפקד.
  private initialHeight = 0;

  private canvasStartWidth = 0; // מידות המשטח בתחילת שינוי הגודל.
  private canvasStartHeight = 0;

  drop(event: CdkDragDrop<CanvasField[], FieldOption[]>): void {
    const option = event.item.data; // הנתונים של הפקד שנגרר מהסרגל.

    if (!option) {
      return; // אין פקד, ולכן לא ממשיכים.
    }

    const canvas = this.canvasElement.nativeElement; // משטח העבודה.
    const rect = canvas.getBoundingClientRect(); // המיקום של המשטח במסך.

    const width = 260; // רוחב ברירת מחדל לפקד חדש.
    const height = 110; // גובה ברירת מחדל לפקד חדש.

    let x = event.dropPoint.x - rect.left - width / 2; // חישוב המיקום האופקי.
    let y = event.dropPoint.y - rect.top - 25; // חישוב המיקום האנכי.

    x = this.clamp(x, 0, Math.max(0, canvas.clientWidth - width)); // הפקד נשאר בתוך המשטח.
    y = this.clamp(y, 0, Math.max(0, canvas.clientHeight - height));

    const newField: CanvasField = {
      ...option,          // העתקת פרטי הפקד מהסרגל.
      id: this.nextId++,  // הקצאת מזהה חדש.
      x,                  // מיקום אופקי.
      y,                  // מיקום אנכי.
      width,              // רוחב.
      height              // גובה.
    };

    this.fields = [...this.fields, newField]; // הוספת הפקד למערך הזמני.
    this.selectedFieldId = newField.id; // בחירת הפקד החדש.
  }

  selectField(event: PointerEvent, field: CanvasField): void {
    event.stopPropagation(); // מניעת העברת האירוע למשטח.
    this.selectedFieldId = field.id; // סימון הפקד כנבחר.
  }

  clearSelection(): void {
    if (!this.movingField && !this.resizingField && !this.resizingCanvas) {
      this.selectedFieldId = null; // ביטול הבחירה אם לא מתבצעת פעולה.
    }
  }

  startMove(event: PointerEvent, field: CanvasField): void {
    if (event.button !== 0 || this.resizingField || this.resizingCanvas) {
      return; // מונע התחלת הזזה בלחצן לא מתאים או בזמן שינוי גודל.
    }

    event.preventDefault(); // מניעת התנהגות ברירת מחדל של הדפדפן.
    event.stopPropagation(); // מניעת הפצת האירוע.

    this.selectedFieldId = field.id; // בחירת הפקד.
    this.movingField = field; // סימון הפקד כמיועד להזזה.

    this.pointerStartX = event.clientX; // שמירת מיקום העכבר ההתחלתי.
    this.pointerStartY = event.clientY;

    this.initialX = field.x; // שמירת מיקום הפקד לפני ההזזה.
    this.initialY = field.y;
  }

  startResize(event: PointerEvent, field: CanvasField): void {
    if (event.button !== 0) {
      return; // רק לחיצה שמאלית מתחילה שינוי גודל.
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectedFieldId = field.id; // בחירת הפקד.
    this.movingField = null; // ביטול מצב הזזה.
    this.resizingField = field; // הפקד שגודלו משתנה.

    this.pointerStartX = event.clientX; // מיקום העכבר בתחילת השינוי.
    this.pointerStartY = event.clientY;

    this.initialWidth = field.width; // שמירת הגודל ההתחלתי.
    this.initialHeight = field.height;
  }

  // התחלת שינוי הגודל של כל משטח העבודה.
  startCanvasResize(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const canvas = this.canvasElement.nativeElement; // משטח העבודה.

    this.selectedFieldId = null; // ביטול בחירת הפקד.
    this.movingField = null;
    this.resizingField = null;
    this.resizingCanvas = true; // הפעלת מצב שינוי גודל המשטח.

    this.pointerStartX = event.clientX; // מיקום העכבר בתחילת הפעולה.
    this.pointerStartY = event.clientY;

    this.canvasStartWidth = canvas.clientWidth; // שמירת המידות ההתחלתיות.
    this.canvasStartHeight = canvas.clientHeight;

    this.canvasWidth = this.canvasStartWidth; // קביעת הרוחב ההתחלתי.
    this.canvasHeight = this.canvasStartHeight;
  }

  @HostListener('document:pointermove', ['$event']) // האזנה לתנועת העכבר בכל המסמך.
  onPointerMove(event: PointerEvent): void {
    const deltaX = event.clientX - this.pointerStartX; // המרחק שהעכבר זז אופקית.
    const deltaY = event.clientY - this.pointerStartY; // המרחק שהעכבר זז אנכית.

    if (this.resizingCanvas) {
      const minWidth = Math.max(
        400,
        ...this.fields.map(field => field.x + field.width + 20)
      ); // רוחב מינימלי שמונע חיתוך של פקדים.

      const minHeight = Math.max(
        300,
        ...this.fields.map(field => field.y + field.height + 20)
      ); // גובה מינימלי שמונע חיתוך של פקדים.

      this.canvasWidth = this.clamp(
        this.canvasStartWidth + deltaX, minWidth, 2000
      ); // עדכון הרוחב תוך הגבלת המידות.

      this.canvasHeight = this.clamp(
        this.canvasStartHeight + deltaY, minHeight, 1600
      ); // עדכון הגובה תוך הגבלת המידות.

      return; // לא ממשיכים לטיפול בהזזת פקד.
    }

    const canvas = this.canvasElement.nativeElement;

    if (this.movingField) {
      const field = this.movingField; // הפקד שמזיזים.

      const maxX = Math.max(0, canvas.clientWidth - field.width); // הגבול הימני.
      const maxY = Math.max(0, canvas.clientHeight - field.height); // הגבול התחתון.

      field.x = this.clamp(this.initialX + deltaX, 0, maxX); // עדכון המיקום האופקי.
      field.y = this.clamp(this.initialY + deltaY, 0, maxY); // עדכון המיקום האנכי.
      return;
    }

    if (this.resizingField) {
      const field = this.resizingField; // הפקד שמשנים את גודלו.

      const maxWidth = Math.max(180, canvas.clientWidth - field.x); // הרוחב המרבי.
      const maxHeight = Math.max(70, canvas.clientHeight - field.y); // הגובה המרבי.

      field.width = this.clamp(
        this.initialWidth + deltaX, 180, maxWidth
      ); // עדכון הרוחב תוך שמירה על גבולות.

      field.height = this.clamp(
        this.initialHeight + deltaY, 70, maxHeight
      ); // עדכון הגובה תוך שמירה על גבולות.
    }
  }

  @HostListener('document:pointerup') // סיום הפעולה כשהעכבר משתחרר.
  @HostListener('document:pointercancel') // סיום אם פעולת העכבר מתבטלת.
  onPointerUp(): void {
    this.movingField = null; // הפסקת הזזת הפקד.
    this.resizingField = null; // הפסקת שינוי גודל הפקד.
    this.resizingCanvas = false; // הפסקת שינוי גודל המשטח.
  }

  removeField(id: number): void {
    this.fields = this.fields.filter(field => field.id !== id); // הסרת הפקד מהמערך.

    if (this.selectedFieldId === id) {
      this.selectedFieldId = null; // ביטול הבחירה אם הפקד שנמחק היה נבחר.
    }
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), Math.max(min, max)); // הגבלת ערך לטווח מותר.
  }
}