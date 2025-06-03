"use strict";
//
// UTILITIES (3)
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueByLoans = void 0;
exports.getLatestCollectById = getLatestCollectById;
exports.uniqueNames = uniqueNames;
exports.getUniqueByKey = getUniqueByKey;
// 2. Method to Make IDs
// export function generateUniqueId() {
//   const now = new Date();
//   const year = now.getFullYear().toString().slice(-2); // Last 2 digits of the year
//   const month = (now.getMonth() + 1).toString().padStart(2, '0');
//   const day = now.getDate().toString().padStart(2, '0'); // Day (1-31)
//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const seconds = now.getSeconds().toString().padStart(2, '0'); // Seconds (0-59)
//   const dateTimeString = `${year}${month}${day}${hours}${minutes}${seconds}`;
//   const uniqueId = dateTimeString.split('').sort(() => 0.5 - Math.random()).join('').slice(0, 6);
//   return uniqueId;
// }
// 5. Method to Make IDs
function getLatestCollectById(collections) {
    const uniqueCollectionsMap = collections.reduce((acc, current) => {
        const existing = acc.get(current.loanidx);
        if (!existing || existing.receivedz < current.receivedz) {
            acc.set(current.loanidx, current);
        }
        return acc;
    }, new Map());
    return Array.from(uniqueCollectionsMap.values());
}
// 6. Method to Make IDs
function uniqueNames(names) {
    return [...new Set(names)];
}
// 7. Method to Make IDs
function getUniqueByKey(items, key) {
    const seen = new Set();
    return items.filter((item) => {
        const value = item[key];
        if (!seen.has(value)) {
            seen.add(value);
            return true;
        }
        return false;
    });
}
const getUniqueByLoans = (key, data) => {
    return Array.from(data
        .reduce((map, loan) => {
        const normalizedKey = String(loan[key]).toLowerCase();
        const existingLoan = map.get(normalizedKey);
        // If the loan doesn't exist in the map or the current loan has a higher balancex, update the map
        if (!existingLoan || loan.balancex > existingLoan.balancex) {
            map.set(normalizedKey, loan);
        }
        return map;
    }, new Map())
        .values());
};
exports.getUniqueByLoans = getUniqueByLoans;
// ==============================|TWELVE|========================================
