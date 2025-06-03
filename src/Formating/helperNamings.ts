// import type { IApplicant } from "@/types/Models.Loans";
// SEVEN

import { IApplicant } from "..";

//  1. Reduce length of Name to Two
export const getOneName = (text: string) => {
  const words = text.split(" ").slice(0, 1).join(" ");
  const firstName = words
    .replace(/@.*/, "")
    .replace(/^[^.]*\./, "");
  const x = capitalizeFirstLetterAlways(firstName);
  const z = x.substring(0, 12);
  return z;
};

// 2. Method to format Imanges
export const getTwoNames = (text: string) => {
  const words = text.split(" ").slice(0, 2).join(" ");
  return words.toUpperCase();
};


// 3. Method to format Imanges
export const combineNamesToLoaneex = (applicant: IApplicant): IApplicant => {
  return {
    ...applicant,
    loaneex: `${applicant.first_names} ${applicant.surname}`
  };
}

// 4. Method to format Imanges
export const capitalizeFirstLetterAlways1 = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const capitalizeFirstLetterAlways = (str: string) => {
  return str
    // Capitalize letters at the start or after space or brackets
    .replace(/(^|[\s([{])\w/g, match => match.toUpperCase())
    // Lowercase all characters after the first in each word
    .replace(/(\w)(\w*)/g, (_, first, rest) => first + rest.toLowerCase());
};


// 5. Method to format Imanges
export function getFirstLetter(str: string | number) {
  if (str && typeof str === 'string') {
    return str.slice(0, 4).toUpperCase();
  }
  return '';
}

// // 6. Method to format Imanges
export const cutUpTo20Words = (input: string): string => {
  if (typeof input !== "string") {
    throw new Error("Invalid input: expected a string.");
  }
  return input.substring(0, 20);
};


// 7. Method to format Imanges
export const removeExtraSpaces = (str: string) => {
  return str.replace(/\s+/g, ' ').trim();
}

export const sanitizeFilename = (str: string) =>
  str.toString()
    .replace(/[^a-zA-Z0-9_-]/g, '') // Remove unsafe chars
    .substring(0, 50); // Limit length

///===============================|SEVEN|==========================================
