const romanNumbers: ReadonlyArray<string> = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
];

/**
 * Converts a number to a Roman number.
 * @param number The number that shall be returned as a Roman number.
 * @param index If the number parameter is 0-based. Default is false.
 */
export const getRoman = (number: number, index: boolean = false): string => {
  return romanNumbers[number + (index ? 0 : -1)];
};

/**
 * Forces signing on the given number.
 * @param number
 */
export const sign = (number: number): string => {
  return number > 0 ? `+${number}` : number.toString();
};

/**
 * Forces signing on the given number, ignores 0.
 * @param number
 */
export const signNull = (number: number, placeholder: string = ''): string => {
  if (number > 0) {
    return `+${number}`
  }
  else if (number < 0) {
    return number.toString();
  }
  else {
    return placeholder;
  }
};

/**
 * Multiplies given string by 100 if it contains `,` o `.`.
 * @param number
 */
export const multiplyString = (string: string): string => {
  if (/^\d+[,\.]\d+$/.test(string)) {
    const float = Number.parseFloat(string.replace(/,/, '.'));
    const multiplied = float * 100;
    return multiplied.toString();
  }
  else {
    return string;
  }
};
