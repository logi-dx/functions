import { isAnObject } from './isAnObject';

export const isAPropertyOf = (input: any, property: string): boolean => isAnObject(input) && property in input;
