import readlineSync from 'readline-sync';

export function readString(msg: String): String {
  const value: String = readlineSync.question(msg);
  return value;
}

export function readNumber(msg: String): number {
  const value: String = readlineSync.question(msg);
  return Number(value);
}

export function readDate(msg: String): Date {
  const value: String = readlineSync.question(msg + '(dd/mm/aaaa): ');
  const dateParts: string[] = value.split('/');
  return new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0]));
}