import { Component, inject, OnInit, signal } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Tavnit } from '../../models/tavnit';
import { TavniyotService } from '../../services/tavniyot.service';

@Component({
  selector: 'app-nihul-tavniyot-dashboard',
  imports: [ToastModule, ConfirmDialogModule, ButtonModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './nihul-tavniyot-dashboard.component.html',
  styleUrl: './nihul-tavniyot-dashboard.component.scss'
})
export class NihulTavniyotDashboardComponent implements OnInit {
  private tavniyotService = inject(TavniyotService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  tavniyot = signal<Tavnit[]>([]);

  ngOnInit() {
    this.getAllTavniyot();
  }

  getAllTavniyot(showSuccess = false) {
    this.tavniyotService.getAllTavniyotTest().subscribe({
      next: (res) => {
        this.tavniyot.set(res);
        if (showSuccess) {
          this.messageService.add({
            severity: 'success',
            summary: 'הצלחה',
            detail: 'התבניות נטענו מחדש'
          });
        }
      },
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'שגיאה',
          detail: 'לא ניתן לטעון את התבניות'
        })
    });
  }

  confirmRefresh() {
    this.confirmationService.confirm({
      header: 'אישור',
      message: 'לטעון מחדש את רשימת התבניות?',
      acceptLabel: 'כן',
      rejectLabel: 'לא',
      accept: () => this.getAllTavniyot(true)
    });
  }
}