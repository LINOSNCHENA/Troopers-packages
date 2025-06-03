"use strict";
//
// DATES (8)
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDateSeries = exports.formatDateWhole = void 0;
exports.transArrayformDates = transArrayformDates;
exports.transArrayformDates1 = transArrayformDates1;
// 1. Elleven methods in one
const formatDateWhole = (value) => {
    var _a, _b, _c;
    const date = new Date(value);
    if (!value || isNaN(new Date(value).getTime())) {
        console.error("Invalid date input:", value);
        // console.log("=================|Helper|===================")
        return {
            standard: "",
            lusakaTime: "",
            pragueTime: "",
            yearLong: "",
            yearShort: "",
            long: "",
            short: "",
            timeDateHrs: "",
            timeHours: "",
            ISOstring: "",
            FileName: "",
        };
    }
    const lusakaTime = date.toLocaleString("en-ZM", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Africa/Lusaka",
    }); //1
    const pragueTime = date.toLocaleString("en-CZ", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Europe/Prague",
    }); //2
    const yearShort = date.toLocaleDateString("en-ZM", {
        year: "numeric",
        month: "short",
    }); //3
    const yearLong = date.toLocaleDateString("en-ZM", {
        year: "numeric",
        month: "short",
    }); //4
    const standard = date.toLocaleDateString("en-ZM", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "Africa/Lusaka",
    }); //5
    const long = new Date(date)
        .toLocaleDateString("en-ZM", {
        year: "2-digit",
        month: "short",
        day: "2-digit",
    })
        .split("/")
        .reverse()
        .join("-")
        .replace(/\//g, "-"); //6
    const short = new Date(date).toLocaleDateString("en-ZM", {
        year: "2-digit",
        month: "numeric",
        day: "2-digit",
    }); //7
    const timeHours = (_c = (_b = (_a = date === null || date === void 0 ? void 0 : date.toTimeString()) === null || _a === void 0 ? void 0 : _a.split(" ")[0]) === null || _b === void 0 ? void 0 : _b.replace(/:/g, ".")) !== null && _c !== void 0 ? _c : "00.00.00";
    //8
    const timeDateHrs = date
        .toLocaleDateString("en-ZM")
        .split("/")
        .reverse()
        .map((val, index) => (index === 2 ? val.slice(-2) : val))
        .reverse()
        .join("-"); // 9
    const ISOstring = (new Date(date)).toLocaleDateString();
    // 10
    const FileName2 = (new Date(date)).toISOString()
        .replace(/T/, '_') // Replace T with underscore
        .replace(/:/g, '-') // Replace colons with dashes
        .replace(/\..+/, ''); // Remove milliseconds
    //11
    const FileName = (new Date(date)).toLocaleString('en-ZM', {
        timeZone: 'Africa/Lusaka',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+):(\d+)/, '$3-$2-$1_$4-$5-$6');
    //12
    return { standard, lusakaTime, pragueTime, yearLong, yearShort, long, short, timeDateHrs, timeHours, ISOstring, FileName };
};
exports.formatDateWhole = formatDateWhole;
// 2. Method to format Imanges
// export function formatDateToYYYYMMDD(date: Date | string): string {
//   const d = typeof date === 'string' ? new Date(date) : date;
//   if (isNaN(d.getTime())) {
//     throw new Error("Invalid date provided");
//   }
//   const year = d.getFullYear();
//   const month = String(d.getMonth() + 1).padStart(2, '0');
//   const day = String(d.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// }
function transArrayformDates(dates) {
    return dates.map(dateStr => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-ZM', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    });
}
function transArrayformDates1(dates) {
    return dates.map((dateStr, index) => {
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-ZM', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        return `(${index + 1}) ${formattedDate}`;
    });
}
// 1. Method to generate dates
const generateDateSeries = (startDate, count = 12) => {
    const start = new Date(startDate);
    return Array.from({ length: count }, (_, i) => {
        const date = new Date(start);
        date.setMonth(start.getMonth() + i);
        return (0, exports.formatDateWhole)(date).standard;
    });
};
exports.generateDateSeries = generateDateSeries;
// ===============================================================
