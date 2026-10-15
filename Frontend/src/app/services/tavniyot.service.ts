import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CodTeur } from '../models/cod-teur';
import { Tavnit } from '../models/tavnit';

@Injectable({ providedIn: 'root' })
export class TavniyotService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.url}Tavniyot`;

  getAllTavniyotTest(): Observable<Tavnit[]> {
    return this.http.get<Tavnit[]>(`${this.baseUrl}/GetAllTavniyotTEST`);
  }

  getCodTeurTavniyotTest(): Observable<CodTeur[]> {
    return this.http.get<CodTeur[]>(`${this.baseUrl}/GetCodTeurTavniyotTEST`);
  }
}