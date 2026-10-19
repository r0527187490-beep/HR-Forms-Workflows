import { ControlType } from "./enums/control-type.enum";

;

export interface FormControl {
  id: string;
  type: ControlType;
  label: string;
  required: boolean;
  smartFieldKey?: string | null;
  readOnly: boolean;
  helpText?: string | null;
  defaultValue?: string | null;

  x?: number | null;
  y?: number | null;
  width?: number | null;
  height?: number | null;
}