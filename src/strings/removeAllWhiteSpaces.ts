export const removeAllWhiteSpaces = (input: string): string => {
  return input.replace(/\s/g, '').replace(/\n/g, '').replace(/\r/g, '').replace(/\t/g, '');
};
