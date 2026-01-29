export const isInteger = (value: string | number): boolean => {
  if (typeof value === "number") {
    return Number.isInteger(value);
  }
  return /^-?\d+$/.test(String(value).trim());
};
export const validateName = (name: string): string => {
  // Thai: \u0E00-\u0E7F, English: a-zA-Z, and spaces
  const thaiOrEnglishRegex = /^[a-zA-Z\u0E00-\u0E7F\s]+$/;

  if (!name || name.trim() === "") {
    return "Please enter Employee Name";
  }
  if (!thaiOrEnglishRegex.test(name)) {
    return "Name must be Thai or English letters only";
  }
  return "";
};
export const validateNumericField = (
  value: number | string,
  fieldName: string,
): string => {
  if (value === undefined || value === null || value === "") {
    return `Please enter ${fieldName}`;
  }
  if (!isInteger(value)) {
    return "Please enter with integer or whole number";
  }
  return "";
};
export const validateInputRanges = (
  locks: number,
  stocks: number,
  barrels: number,
): string[] => {
  const errors: string[] = [];

  if (isNaN(locks) || locks < 1 || locks > 70) {
    errors.push("Locks must be between 1 and 70");
  }
  if (isNaN(stocks) || stocks < 1 || stocks > 80) {
    errors.push("Stocks must be between 1 and 80");
  }
  if (isNaN(barrels) || barrels < 1 || barrels > 90) {
    errors.push("Barrels must be between 1 and 90");
  }

  return errors;
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
export const validateAllInputs = (
  name: string,
  locks: number,
  stocks: number,
  barrels: number,
): ValidationResult => {
  const errors: string[] = [];

  const nameError = validateName(name);
  if (nameError) errors.push(nameError);

  const locksError = validateNumericField(locks, "Locks");
  if (locksError) errors.push(locksError);

  const stocksError = validateNumericField(stocks, "Stocks");
  if (stocksError) errors.push(stocksError);

  const barrelsError = validateNumericField(barrels, "Barrels");
  if (barrelsError) errors.push(barrelsError);

  const rangeErrors = validateInputRanges(locks, stocks, barrels);
  errors.push(...rangeErrors);

  return {
    isValid: errors.length === 0,
    errors,
  };
};
