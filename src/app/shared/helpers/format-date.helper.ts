import { format } from 'date-fns';

export function getFormattedDate(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}
