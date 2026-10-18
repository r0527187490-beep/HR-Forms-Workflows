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

  dialogVisible = false;
  isEdit = false;
  submitted = false;
  draft: SmartField = this.emptyField();

  get shemError(): string {
    return this.draft.shemSadeh.trim() ? '' : 'שם שדה הוא שדה חובה';
  }

  get dataKeyError(): string {
    const v = this.draft.dataKey.trim();
    if (!v) return 'מפתח נתון הוא שדה חובה';
    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(v)) {
      return 'באנגלית בלבד, מתחיל באות, בלי רווחים (למשל fullName)';
    }
    const exists = this.fields().some(
      f => f.idRec !== this.draft.idRec && f.dataKey.toLowerCase() === v.toLowerCase());
    return exists ? 'מפתח נתון זה כבר קיים' : '';
  }

  get isValid(): boolean {
    return !this.shemError && !this.dataKeyError;
  }

  openAdd(): void {
    this.draft = this.emptyField();
    this.isEdit = false;
    this.submitted = false;
    this.dialogVisible = true;
  }

  openEdit(field: SmartField): void {
    this.draft = { ...field };
    this.isEdit = true;
    this.submitted = false;
    this.dialogVisible = true;
  }

  save(): void {
    this.submitted = true;
    if (!this.isValid) return;
    const clean: SmartField = {
      ...this.draft,
      shemSadeh: this.draft.shemSadeh.trim(),
      dataKey: this.draft.dataKey.trim(),
    };
    if (this.isEdit) {
      this.fields.update(list => list.map(f => (f.idRec === clean.idRec ? clean : f)));
    } else {
      const nextId = Math.max(0, ...this.fields().map(f => f.idRec)) + 1;
      this.fields.update(list => [...list, { ...clean, idRec: nextId }]);
    }
    this.dialogVisible = false;
    this.submitted = false;
  }

  confirmDelete(field: SmartField): void {
    this.confirmationService.confirm({
      header: 'מחיקת שדה',
      message: `האם למחוק את "${field.shemSadeh}"?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'כן',
      rejectLabel: 'לא',
      accept: () => this.fields.update(list => list.filter(f => f.idRec !== field.idRec)),
    });
  }

  private emptyField(): SmartField {
    return { idRec: 0, shemSadeh: '', dataKey: '', type: 'text', isPail: true };
  }
}