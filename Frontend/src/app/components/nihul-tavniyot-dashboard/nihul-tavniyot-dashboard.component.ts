import { Component, inject, OnInit, signal } from '@angular/core';
import { TavniyotService } from '../../services/tavniyot.service';
import { Tavnit } from '../../models/tavnit';



@Component({
  selector: 'app-nihul-tavniyot-dashboard',
  imports: [],
  templateUrl: './nihul-tavniyot-dashboard.component.html',
  styleUrl: './nihul-tavniyot-dashboard.component.scss',
})
export class NihulTavniyotDashboardComponent implements OnInit{
private tavniyotService = inject(TavniyotService);
  tavniyot = signal<Tavnit[]>([]);

  ngOnInit() {
    this.tavniyotService.getAllTavniyotTest()
      .subscribe(res => this.tavniyot.set(res));
  }
}
