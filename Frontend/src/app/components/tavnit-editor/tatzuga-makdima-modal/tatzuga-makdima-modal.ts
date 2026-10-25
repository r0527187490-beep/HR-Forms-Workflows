import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { RenderedControl } from '../design-tofes/tofes-canvas/rendered-control/rendered-control';

@Component({
  selector: 'app-tatzuga-makdima-modal',
  standalone: true,
  imports: [CommonModule, RenderedControl],
  templateUrl: './tatzuga-makdima-modal.html',
  styleUrl: './tatzuga-makdima-modal.scss'
})
export class TatzugaMakdimaModal implements OnChanges {

  private cdr = inject(ChangeDetectorRef);
  private sanitizer = inject(DomSanitizer);

  @Input() fields: any[] = [];
  @Input() html = '';
  @Input() isHtmlMode = false;
  @Input() canvasWidth = 600;
  @Input() canvasHeight = 300;
  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  // HTML מנוקה שמוצג כולל שדות הקלדה
  safeHtml: SafeHtml = '';

  close(): void {
    this.closed.emit();
  }

  trackById(_: number, field: any): string {
    return field.id;
  }

  ngOnChanges(): void {
    const clean = DOMPurify.sanitize(this.html ?? '', {
      ADD_TAGS: ['form', 'input', 'select', 'option', 'textarea', 'button']
    });

    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(clean);
    this.cdr.markForCheck();
  }
}