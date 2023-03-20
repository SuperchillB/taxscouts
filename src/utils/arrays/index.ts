/**
 * Returns true if the array is not null, not undefined, and has a length greater than 0
 * @param {any[]} array - any[] - the array to check
 * @returns A boolean
 */
export const isNotEmptyArray = (array: any[]): boolean => {
  return !!(array && array?.length && array?.length > 0);
};

/**
 * Removes duplicates from array of objects based on given key
 * @param {T[]} arr - T[] - the array from which duplicates will be removed
 * @param {string} key - string - the key used to remove duplicates
 * @returns   Array
 */
export const getUniqueArrayByKey = <T extends Record<string, any>>(
  arr: T[],
  key: string,
): T[] => {
  return [...new Map(arr.map((item: T) => [item[key], item])).values()];
};
