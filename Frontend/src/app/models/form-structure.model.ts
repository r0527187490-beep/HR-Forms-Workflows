import { FormControl } from './form-control.model';

export interface FormStructure {
  controls: FormControl[];
  canvasWidth?: number | null;
  canvasHeight?: number | null;
}