export const decimalPoints = 2;

// 1. Method to format Imanges

const parseDate = (d: string | number | Date): Date => {
  if (d instanceof Date) return d;
  if (typeof d === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(d)) {
    const [day, month, year] = d.split('/').map(Number);
    return new Date(year ?? 0, (month ?? 1) - 1, day ?? 1);
  }
  return new Date(d);
};

// 2. Method to format percentage
export const formatPercentage = (value: number) => {
  value = value ?? 0;
  return value.toLocaleString("en-ZM", {
    style: "percent",
    minimumFractionDigits: decimalPoints,
    maximumFractionDigits: decimalPoints,
  });
};


// 3. Method to decimal places
export const formatDecimals = (
  value: number | string | undefined | null,
  //  decimalPoints = 2
): number => {
  const num = Number(value);
  if (value === undefined || value === null || isNaN(num)) {
    return parseFloat((0).toFixed(decimalPoints));
  }
  return parseFloat(num.toFixed(decimalPoints));
};

// 4. Method to fcompute days
export const calculateDaysBetween = (
  dateStart: string | number | Date,
  dateEnd: string | number | Date
): { years: any; days: any; seconds: any } => {
  const d1 = parseDate(dateStart);
  const d2 = parseDate(dateEnd === 'pending' ? new Date() : dateEnd);
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) throw new Error("Invalid date format.");
  const ms = Math.max(0, (d2.getTime() - d1.getTime()));
  const days = formatDecimals(ms / (1000 * 60 * 60 * 24));
  return { years: formatDecimals(days / 365), days, seconds: formatDecimals(ms) };
};


//================================|THREE|===================================
