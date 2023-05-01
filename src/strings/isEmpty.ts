import { removeAllWhiteSpaces } from "./removeAllWhiteSpaces";

export const isEmpty = (input: string): boolean => removeAllWhiteSpaces(input).length === 0;