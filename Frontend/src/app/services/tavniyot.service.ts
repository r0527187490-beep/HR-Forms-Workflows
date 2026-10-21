import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CodTeur } from '../models/cod-teur';
import { Tavnit } from '../models/tavnit';
import { FormControl } from '../models/form-control.model';
import { FormDetails } from '../models/form-details.model';
import { SmartField } from '../models/smart-field';




@Injectable({ providedIn: 'root' })
export class TavniyotService {
  private http = inject(HttpClient);

  private baseUrl = `${environment.url}Tavniyot`;

  getAllTavniyotTest(): Observable<Tavnit[]> {
    return this.http.get<Tavnit[]>(
      `${this.baseUrl}/GetAllTavniyotTEST`
    );
  }

  getCodTeurTavniyotTest(): Observable<CodTeur[]> {
    return this.http.get<CodTeur[]>(
      `${this.baseUrl}/GetCodTeurTavniyotTEST`
    );
  }

  GetSmartFieldsList(): Observable<FormControl[]> {
    return this.http.get<FormControl[]>(
      `${this.baseUrl}/GetSmartFieldsList`
    );
  }

  GetBasicControlsList(): Observable<FormControl[]> {
    return this.http.get<FormControl[]>(
      `${this.baseUrl}/GetBasicControlsList`
    );
  }

  // שמירת הטופס בשרת.
  saveForm(details: FormDetails): Observable<FormDetails> {
    return this.http.post<FormDetails>(
      `${this.baseUrl}/SaveForm`,
      details
    );
  }

  // ---- הגדרות שדות חכמים ----

  getSmartFields(onlyActive = false): Observable<SmartField[]> {
    return this.http.get<SmartField[]>(
      `${this.baseUrl}/smart-fields`,
      { params: { onlyActive } }
    );
  }

  addSmartField(field: SmartField): Observable<SmartField> {
    return this.http.post<SmartField>(
      `${this.baseUrl}/smart-fields`,
      field
    );
  }

  updateSmartField(field: SmartField): Observable<SmartField> {
    return this.http.put<SmartField>(
      `${this.baseUrl}/smart-fields/${field.idRec}`,
      field
    );
  }

  deleteSmartField(idRec: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/smart-fields/${idRec}`
    );
  }
}