import { Component, inject, input, linkedSignal, output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-html-code-editor',
  imports: [ConfirmDialogModule,TextareaModule],
  providers: [ConfirmationService],
  templateUrl: './html-code-editor.component.html',
  styleUrl: './html-code-editor.component.scss',
})
export class HtmlCodeEditorComponent {
private confirmationService = inject(ConfirmationService);

  html = input<string>('');
  htmlChange = output<string>();
  switchToVisual = output<void>();

  code = linkedSignal(() => this.html());

  onInput(event: Event): void {
    this.update((event.target as HTMLTextAreaElement).value);
  }

  onTab(event: KeyboardEvent): void {
    event.preventDefault();
    const area = event.target as HTMLTextAreaElement;
    const start = area.selectionStart;
    const end = area.selectionEnd;
    const value = area.value.substring(0, start) + '  ' + area.value.substring(end);
    area.value = value;
    area.selectionStart = area.selectionEnd = start + 2;
    this.update(value);
  }

  confirmClear(): void {
    this.confirmationService.confirm({
      header: 'נקה קוד',
      message: 'האם למחוק את כל הקוד?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'כן',
      rejectLabel: 'לא',
      accept: () => this.update(''),
    });
  }

  private update(value: string): void {
    this.code.set(value);
    this.htmlChange.emit(value);
  }

}
