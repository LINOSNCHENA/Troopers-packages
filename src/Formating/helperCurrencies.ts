//
// UTILITIES (4)
//

import { decimalPoints } from "./helperMathematics";


// 1. Method to format currency Normal
export const formatCurrency = (value: string | number) => {
  if (value === null || value === undefined) {
    value = 0;
  }
  return value.toLocaleString("en-ZM", {
    style: "currency",
    currency: "ZMW",
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints,
  });
};

// 2. Method to format currency Normal

export const formatCurrencyMany = (value: string | number) => {
  if (value === null || value === undefined) {
    value = 0;
  }
  const USDMoney = value.toLocaleString("en-ZM", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints,
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
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints,
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
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints,
  });

  const CZKSmall = value.toLocaleString("en-ZM", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return { USDMoney, USDSmall, ZMWMoney, ZMWSmall, CZKMoney, CZKSmall }
};


export function cleanCZK(input: String) {
  // Remove spaces and commas
  const cleaned = input.replace(/[\s,]/g, '');
  return cleaned.split('.')[0];
}

// ==============================|TWELVE|========================================

