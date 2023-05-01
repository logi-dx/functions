import { isATypeOf } from './isATypeOf';

export const isAString = (input: any): boolean => isATypeOf(input, 'string');
