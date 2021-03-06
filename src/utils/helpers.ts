// External Dependencies
import {
  format,
  isAfter,
} from 'date-fns';

// Begin Helpers
export const removeErrorKeys = (form: unknown) => {
  let found = false;
  const result = { ...form };
  const resultKeys = Object.keys(result);

  // We remove any error keys in a form before we send it to the backend
  for (let i = 0; i < resultKeys.length; i += 1) {
    const currentKey = resultKeys[i];
    if (currentKey.endsWith('Error')) {
      delete result[currentKey];
      found = true;
    }
  }

  // If error keys are found, return the new form object
  // If not, return the original form object
  return found ? result : form;
};

// To check for a valid email address
export const emailRegex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

// To check for a valid ZIP Code
export const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/i;

// Current Year - four-digit string
export const currentYearLong = format(new Date(), 'yyyy');

// Current Year - two-digit string
export const currentYearShort = format(new Date(), 'yy');

// The "year" for TMAC starts on 4/1
// new Date(2021, 3, 1) → 4/1/2021
const isTodayAfterMarch31st = isAfter(new Date(), new Date(parseInt(currentYearLong, 10), 3, 1));

export const currentSchoolYearShort = isTodayAfterMarch31st
  ? `${currentYearShort}-${Number(currentYearShort) + 1}`
  : `${Number(currentYearShort) - 1}-${currentYearShort}`;

export const currentSchoolYearLong = isTodayAfterMarch31st
  ? `${currentYearLong}-${Number(currentYearLong) + 1}`
  : `${Number(currentYearLong) - 1}-${currentYearLong}`;
