import { FormStructure } from './form-structure.model';

export interface FormDetails {
  idRecTavnit?: number | null;
  shemTofes: string;
  teur?: string | null;
  idRecTofesVersion?: number | null;
  misparGirsa?: number | null;
  form?: FormStructure | null;
}