"use strict";
// import type { IApplicant } from "@/types/Models.Loans";
// SEVEN
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeFilename = exports.removeExtraSpaces = exports.cutUpTo20Words = exports.capitalizeFirstLetterAlways = exports.capitalizeFirstLetterAlways1 = exports.combineNamesToLoaneex = exports.getTwoNames = exports.getOneName = void 0;
exports.getFirstLetter = getFirstLetter;
//  1. Reduce length of Name to Two
const getOneName = (text) => {
    const words = text.split(" ").slice(0, 1).join(" ");
    const firstName = words
        .replace(/@.*/, "")
        .replace(/^[^.]*\./, "");
    const x = (0, exports.capitalizeFirstLetterAlways)(firstName);
    const z = x.substring(0, 12);
    return z;
};
exports.getOneName = getOneName;
// 2. Method to format Imanges
const getTwoNames = (text) => {
    const words = text.split(" ").slice(0, 2).join(" ");
    return words.toUpperCase();
};
exports.getTwoNames = getTwoNames;
// 3. Method to format Imanges
const combineNamesToLoaneex = (applicant) => {
    return Object.assign(Object.assign({}, applicant), { loaneex: `${applicant.first_names} ${applicant.surname}` });
};
exports.combineNamesToLoaneex = combineNamesToLoaneex;
// 4. Method to format Imanges
const capitalizeFirstLetterAlways1 = (str) => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
exports.capitalizeFirstLetterAlways1 = capitalizeFirstLetterAlways1;
const capitalizeFirstLetterAlways = (str) => {
    return str
        // Capitalize letters at the start or after space or brackets
        .replace(/(^|[\s([{])\w/g, match => match.toUpperCase())
        // Lowercase all characters after the first in each word
        .replace(/(\w)(\w*)/g, (_, first, rest) => first + rest.toLowerCase());
};
exports.capitalizeFirstLetterAlways = capitalizeFirstLetterAlways;
// 5. Method to format Imanges
function getFirstLetter(str) {
    if (str && typeof str === 'string') {
        return str.slice(0, 4).toUpperCase();
    }
    return '';
}
// // 6. Method to format Imanges
const cutUpTo20Words = (input) => {
    if (typeof input !== "string") {
        throw new Error("Invalid input: expected a string.");
    }
    return input.substring(0, 20);
};
exports.cutUpTo20Words = cutUpTo20Words;
// 7. Method to format Imanges
const removeExtraSpaces = (str) => {
    return str.replace(/\s+/g, ' ').trim();
};
exports.removeExtraSpaces = removeExtraSpaces;
const sanitizeFilename = (str) => str.toString()
    .replace(/[^a-zA-Z0-9_-]/g, '') // Remove unsafe chars
    .substring(0, 50); // Limit length
exports.sanitizeFilename = sanitizeFilename;
///===============================|SEVEN|==========================================
