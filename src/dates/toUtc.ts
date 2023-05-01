import { is } from '../is';

export const toUtc = (input?: Date): Date => {
  if (is(input).null() || is(input).notAnInstanceOf(Date)) {
    input = new Date();
  }

  const date: Date = input as Date;
  const second: number = date.getUTCSeconds();
  const minute: number = date.getUTCMinutes();
  const hour: number = date.getUTCHours();
  const day: number = date.getUTCDate();
  const month: number = date.getUTCMonth();
  const year: number = date.getUTCFullYear();
  const now: number = Date.UTC(year, month, day, hour, minute, second);
  return new Date(now);
};
