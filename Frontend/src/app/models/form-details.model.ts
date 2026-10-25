import { FormStructure } from './form-structure.model';

export interface FormDetails {
  idRecTavnit?: number | null;
  shemTofes: string;
  teur?: string | null;
  idRecTofesVersion?: number | null;
  misparGirsa?: number | null;
  tochenHtml?: string | null;
  isPail?: boolean;
  taarichYetzira?: string | null;
  idYotzer?: number | null;
  isMivneJson?: boolean;
  form?: FormStructure | null;
}

