import { SmartField } from '../../../models/smart-field';

export const MOCK_SMART_FIELDS: SmartField[] = [
  { idRec: 1, shemSadeh: 'שם עובד מלא (אוטומטי)', dataKey: 'fullName', type: 'text', isPail: true },
  { idRec: 2, shemSadeh: 'תעודת זהות (חובה)', dataKey: 'idNumber', type: 'text', isPail: true },
  { idRec: 3, shemSadeh: 'מחלקה ארגונית', dataKey: 'department', type: 'text', isPail: true },
];
