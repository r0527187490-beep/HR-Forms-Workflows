import { Component, inject, OnInit, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Tavnit } from '../../models/tavnit';
import { TavniyotService } from '../../services/tavniyot.service';

@Component({
  selector: 'app-nihul-tavniyot-dashboard',
  imports: [ToastModule],
  providers: [MessageService],
  templateUrl: './nihul-tavniyot-dashboard.component.html',
  styleUrl: './nihul-tavniyot-dashboard.component.scss'
})
export class NihulTavniyotDashboardComponent implements OnInit {
  private tavniyotService = inject(TavniyotService);
  private messageService = inject(MessageService);
  tavniyot = signal<Tavnit[]>([]);

  ngOnInit() {
    this.getAllTavniyot();
  }

  getAllTavniyot() {
    this.tavniyotService.getAllTavniyotTest().subscribe({
      next: (res) => this.tavniyot.set(res),
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'שגיאה',
          detail: 'לא ניתן לטעון את התבניות'
        })
    });
  }
}