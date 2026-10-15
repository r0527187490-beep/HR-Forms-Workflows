import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EvenDerech } from '../models/even-derech';

@Injectable({ providedIn: 'root' })
export class MaslulimService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.url}Maslulim`;

  getMaslulByTofesVersionTest(idRecTofesVersion: number): Observable<EvenDerech[]> {
    return this.http.get<EvenDerech[]>(
      `${this.baseUrl}/GetMaslulByTofesVersionTEST`,
      { params: { idRecTofesVersion } }
    );
  }
}