import { isEmpty } from './isEmpty';
import { isNull } from './isNull';

export const isNullOrEmpty = (input: any): boolean => isNull(input) || isEmpty(input);
