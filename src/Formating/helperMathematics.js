"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDaysBetween = exports.formatDecimals = exports.formatPercentage = exports.decimalPoints = void 0;
exports.decimalPoints = 2;
// 1. Method to format Imanges
const parseDate = (d) => {
    if (d instanceof Date)
        return d;
    if (typeof d === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(d)) {
        const [day, month, year] = d.split('/').map(Number);
        return new Date(year !== null && year !== void 0 ? year : 0, (month !== null && month !== void 0 ? month : 1) - 1, day !== null && day !== void 0 ? day : 1);
    }
    return new Date(d);
};
// 2. Method to format percentage
const formatPercentage = (value) => {
    value = value !== null && value !== void 0 ? value : 0;
    return value.toLocaleString("en-ZM", {
        style: "percent",
        minimumFractionDigits: exports.decimalPoints,
        maximumFractionDigits: exports.decimalPoints,
    });
};
exports.formatPercentage = formatPercentage;
// 3. Method to decimal places
const formatDecimals = (value) => {
    const num = Number(value);
    if (value === undefined || value === null || isNaN(num)) {
        return parseFloat((0).toFixed(exports.decimalPoints));
    }
    return parseFloat(num.toFixed(exports.decimalPoints));
};
exports.formatDecimals = formatDecimals;
// 4. Method to fcompute days
const calculateDaysBetween = (dateStart, dateEnd) => {
    const d1 = parseDate(dateStart);
    const d2 = parseDate(dateEnd === 'pending' ? new Date() : dateEnd);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime()))
        throw new Error("Invalid date format.");
    const ms = Math.max(0, (d2.getTime() - d1.getTime()));
    const days = (0, exports.formatDecimals)(ms / (1000 * 60 * 60 * 24));
    return { years: (0, exports.formatDecimals)(days / 365), days, seconds: (0, exports.formatDecimals)(ms) };
};
exports.calculateDaysBetween = calculateDaysBetween;
//================================|THREE|===================================
