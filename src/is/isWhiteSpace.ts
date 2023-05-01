import { isAString } from './isAString';
import { isNullOrEmpty } from './isNullOrEmpty';

export const isWhiteSpace = (input: any): boolean => {
  const isNotString: boolean = !isAString(input);

  if (isNotString) {
    throw new TypeError(
      "Logi-DX Functions: The argument must be a string for the 'isWhiteSpace' function to not throw an error",
    );
  }

  const castedString: string = input as string;
  return isNullOrEmpty(castedString);
};
