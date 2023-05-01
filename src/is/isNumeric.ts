import { isATypeOf } from './isATypeOf';

export const isNumeric = (input: any): boolean => isATypeOf(input, 'number') && !isNaN(input) && !Number.isNaN(input);
