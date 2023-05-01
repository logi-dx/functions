import { isAPropertyOf } from './isAPropertyOf';
import { isATypeOf } from './isATypeOf';
import { isAnArray } from './isAnArray';
import { isAnInstanceOf } from './isAnInstanceOf';
import { isAnInteger } from './isAnInteger';
import { isAnObject } from './isAnObject';
import { isEmpty } from './isEmpty';
import { isNull } from './isNull';
import { isNullOrEmpty } from './isNullOrEmpty';
import { isNumeric } from './isNumeric';
import { isWhiteSpace } from './isWhiteSpace';

export const is = (input: any) => {
  const api = {
    empty: () => isEmpty(input),
    notEmpty: () => !isEmpty(input),
    null: () => isNull(input),
    notNull: () => !isNull(input),
    nullOrEmpty: () => isNullOrEmpty(input),
    notNullOrEmpty: () => !isNullOrEmpty(input),
    anObject: () => isAnObject(input),
    notAnObject: () => !isAnObject(input),
    propertyOf: (property: string) => isAPropertyOf(input, property),
    notPropertyOf: (property: string) => !isAPropertyOf(input, property),
    anInstanceOf: (type: any) => isAnInstanceOf(input, type),
    notAnInstanceOf: (type: any) => !isAnInstanceOf(input, type),
    typeOf: (type: string) => isATypeOf(input, type),
    notTypeOf: (type: string) => !isATypeOf(input, type),
    string: () => isATypeOf(input, 'string'),
    notString: () => !isATypeOf(input, 'string'),
    anArray: () => isAnArray(input),
    notAnArray: () => !isAnArray(input),
    numeric: () => isNumeric(input),
    notNumeric: () => !isNumeric(input),
    anInteger: () => isAnInteger(input),
    notAnInteger: () => !isAnInteger(input),
    positive: () => isNumeric(input) && input > 0,
    notPositive: () => !isNumeric(input) || input <= 0,
    negative: () => isNumeric(input) && input < 0,
    notNegative: () => !isNumeric(input) || input >= 0,
    whiteSpace: () => isWhiteSpace(input),
    notWhiteSpace: () => !isWhiteSpace(input),
  };

  return api;
};
