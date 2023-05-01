import { is } from '../is';
import { isEmpty } from './isEmpty';
import { removeAll } from './removeAll';
import { removeAllWhiteSpaces } from './removeAllWhiteSpaces';

export const strings = (input: string) => {
  const api = {
    strip: () => removeAllWhiteSpaces(input),
    isEmpty: () => isEmpty(input),
    isNotEmpty: () => !isEmpty(input),
    isNullOrEmpty: () => is(input).null() || isEmpty(input),
    isNotNullOrEmpty: () => !is(input).null() && !isEmpty(input),
    remove: (character: string) => input.replace(character, ''),
    removeAll: (character: string) => removeAll(input, character)
  };

  return api;
};
