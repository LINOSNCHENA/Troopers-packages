"use strict";
//
// UTILITIES (4)
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrencyMany = exports.formatCurrency = void 0;
exports.cleanCZK = cleanCZK;
const helperMathematics_1 = require("./helperMathematics");
// 1. Method to format currency Normal
const formatCurrency = (value) => {
    if (value === null || value === undefined) {
        value = 0;
    }
    return value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "ZMW",
        minimumFractionDigits: helperMathematics_1.decimalPoints,
        maximumFractionDigits: helperMathematics_1.decimalPoints,
    });
};
exports.formatCurrency = formatCurrency;
// 2. Method to format currency Normal
const formatCurrencyMany = (value) => {
    if (value === null || value === undefined) {
        value = 0;
    }
    const USDMoney = value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: helperMathematics_1.decimalPoints,
        maximumFractionDigits: helperMathematics_1.decimalPoints,
    });
    const USDSmall = value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const ZMWMoney = value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "ZMW",
        minimumFractionDigits: helperMathematics_1.decimalPoints,
        maximumFractionDigits: helperMathematics_1.decimalPoints,
    });
    const ZMWSmall = value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "ZMW",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const CZKMoney = value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "CZK",
        minimumFractionDigits: helperMathematics_1.decimalPoints,
        maximumFractionDigits: helperMathematics_1.decimalPoints,
    });
    const CZKSmall = value.toLocaleString("en-ZM", {
        style: "currency",
        currency: "CZK",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return { USDMoney, USDSmall, ZMWMoney, ZMWSmall, CZKMoney, CZKSmall };
};
exports.formatCurrencyMany = formatCurrencyMany;
function cleanCZK(input) {
    // Remove spaces and commas
    const cleaned = input.replace(/[\s,]/g, '');
    return cleaned.split('.')[0];
}
// ==============================|TWELVE|========================================
