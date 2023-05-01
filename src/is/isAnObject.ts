import { isATypeOf } from './isATypeOf';
import { isNull } from './isNull';

export const isAnObject = (input: any): boolean => !isNull(input) && isATypeOf(input, 'object');
