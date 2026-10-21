import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SmartField } from '../../../models/smart-field';
import { MOCK_SMART_FIELDS } from './smart-fields-settings.mock';

@Component({
  selector: 'app-smart-fields-settings',
  imports: [
    FormsModule, TableModule, ButtonModule, DialogModule,
    InputTextModule, SelectModule, ToggleSwitchModule, ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './smart-fields-settings.component.html',
  styleUrl: './smart-fields-settings.component.scss',
})
export class SmartFieldsSettingsComponent {
  private confirmationService = inject(ConfirmationService);

  fields = signal<SmartField[]>(MOCK_SMART_FIELDS);
  typeOptions = ['text', 'number', 'date'];

  // הוספה (דיאלוג)
  dialogVisible = false;
  submitted = false;
  draft: SmartField = this.emptyField();

  // עריכה בשורה
  editingId = signal<number | null>(null);
  rowDraft: SmartField = this.emptyField();
  rowSubmitted = false;

  get shemError(): string { return this.shemErrorOf(this.draft); }
  get dataKeyError(): string { return this.dataKeyErrorOf(this.draft); }
  get rowShemError(): string { return this.shemErrorOf(this.rowDraft); }
  get rowDataKeyError(): string { return this.dataKeyErrorOf(this.rowDraft); }

  openAdd(): void {
    this.draft = this.emptyField();
    this.submitted = false;
    this.dialogVisible = true;
  }

  save(): void {
    this.submitted = true;
    if (this.shemError || this.dataKeyError) return;
    const nextId = Math.max(0, ...this.fields().map(f => f.idRec)) + 1;
    this.fields.update(list => [...list, this.cleaned(this.draft, nextId)]);
    this.dialogVisible = false;
    this.submitted = false;
  }

  startEdit(field: SmartField): void {
    this.rowDraft = { ...field };
    this.rowSubmitted = false;
    this.editingId.set(field.idRec);
  }

  cancelEdit(): void {
    this.editingId.set(null);
    this.rowSubmitted = false;
  }

  saveEdit(): void {
    this.rowSubmitted = true;
    if (this.rowShemError || this.rowDataKeyError) return;
    const clean = this.cleaned(this.rowDraft, this.rowDraft.idRec);
    this.fields.update(list => list.map(f => (f.idRec === clean.idRec ? clean : f)));
    this.cancelEdit();
  }

  confirmDelete(field: SmartField): void {
    this.confirmationService.confirm({
      header: 'מחיקת שדה',
      message: `האם למחוק את "${field.shemSadeh}"?`,
      icon: 'pi pi-exclamation-triangle',
            acceptButtonProps: { label: 'מחיקה', severity: 'danger' },
      rejectButtonProps: { label: 'ביטול', severity: 'secondary', text: true },
      accept: () => {
        if (this.editingId() === field.idRec) this.cancelEdit();
        this.fields.update(list => list.filter(f => f.idRec !== field.idRec));
      },
    });
  }

  private shemErrorOf(f: SmartField): string {
    return f.shemSadeh.trim() ? '' : 'שם שדה הוא שדה חובה';
  }

  private dataKeyErrorOf(f: SmartField): string {
    const v = f.dataKey.trim();
    if (!v) return 'מפתח נתון הוא שדה חובה';
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(v)) {
      return 'באנגלית בלבד, מתחיל באות, בלי רווחים (למשל fullName)';
    }
    const exists = this.fields().some(
      x => x.idRec !== f.idRec && x.dataKey.toLowerCase() === v.toLowerCase());
    return exists ? 'מפתח נתון זה כבר קיים' : '';
  }

  private cleaned(f: SmartField, idRec: number): SmartField {
    return { ...f, idRec, shemSadeh: f.shemSadeh.trim(), dataKey: f.dataKey.trim() };
  }

  private emptyField(): SmartField {
    return { idRec: 0, shemSadeh: '', dataKey: '', type: 'text', isPail: true };
  }
}