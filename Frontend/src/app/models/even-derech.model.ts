import { ApproverType } from './enums/approver-type.enum';

export interface EvenDerech {
  idRec: number;
  idRecTofesVersion: number;
  sederShalav: number;
  shemShalav: string;
  sugMaasher: ApproverType;
  idsMaasher: string | null;
  peulot: string;
  idEvenDerechHaczara: string | null;
}