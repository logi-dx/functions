import { toDateOnly } from './toDateOnly';
import { toDateTime } from './toDateTime';
import { toTimeOnly } from './toTimeOnly';
import { toUtc } from './toUtc';

export const dates = (input: Date) => {
  const api = {
    toUtc: () => toUtc(input),
    utcNow: () => toUtc(),
    toDateOnly:() => toDateOnly(input),
    toTimeOnly:() => toTimeOnly(input),
    toDateTime:() => toDateTime(input)
  };

  return api;
};
