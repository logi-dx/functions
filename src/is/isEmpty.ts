import { strings } from '../strings';
import { isAPropertyOf } from './isAPropertyOf';
import { isAString } from './isAString';
import { isAnArray } from './isAnArray';

export const isEmpty = (input: any): boolean => {
  if (isAnArray(input)) {
    const array: any[] = input as any[];
    return array.length === 0;
  } else if (isAString(input)) {
    const castedString: string = input as string;
    return strings(castedString).strip().length === 0;
  } else if (isAPropertyOf(input, 'length') && Number.isInteger(input.length) && input.length >= 0) {
    const something: { length: number } = input as { length: number };
    return something.length === 0;
  }

  throw new TypeError('Logi-DX Functions: Unable to read a length property on the input provided');
};
