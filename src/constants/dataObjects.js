"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_ADDITIONS = exports.OccupationX = exports.BanksTroopers = exports.BanksWhole = exports.loanStatuX = void 0;
exports.loanStatuX = ([
    { value: "Open", label: "Open" }, //1
    { value: "Closed", label: "Closed" }, //2
    { value: "Default", label: "Default" }, //3
    { value: "Flawed", label: "Flawed" }, //4
].sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase())));
exports.BanksWhole = ([
    { value: "AIRTEL", label: "AIRTEL" },
    { value: "STANBIC", label: "STANBIC" },
    { value: "WALLET", label: "WALLET" },
    { value: "ZANACO", label: "ZANACO" },
    { value: "MTN-ZM", label: "MTN MONEY" },
    { value: "ABSA-ZM", label: "ABSA BANK" },
    { value: "INDO-ZAM", label: "INDO BANK" },
    { value: "STANCHART", label: "STANCHART" },
    { value: "REMITLY", label: "REMITLY" },
    { value: "PAYSEND", label: "PAYSEND" },
    { value: "UNKNOWN", label: "UNKNOWN" },
].sort((a, b) => a.label.localeCompare(b.label)));
exports.BanksTroopers = ([
    { value: "AIRTEL", label: "AIRTEL" },
    { value: "STANBIC", label: "STANBIC" },
    { value: "WALLET", label: "WALLET" },
    { value: "MTN-ZM", label: "MTN MONEY" },
    { value: "INDO-ZAM", label: "INDO BANK" },
    { value: "UNKNOWN", label: "UNKNOWN" },
].sort((a, b) => a.label.localeCompare(b.label)));
exports.OccupationX = [
    { value: "accountant", label: "Accountant" },
    { value: "artist", label: "Artist" },
    { value: "business", label: "Business" },
    { value: "consultant", label: "Consultant" },
    { value: "dentist", label: "Dentist" },
    { value: "director", label: "Director" },
    { value: "dividends", label: "Dividends" },
    { value: "doctor", label: "Doctor" },
    { value: "employee", label: "Employee" },
    { value: "engineer", label: "Engineer" },
    { value: "entrepreneur", label: "Entrepreneur" },
    { value: "freelancing", label: "Freelancing" },
    { value: "gardener", label: "Gardener" },
    { value: "investment", label: "Investment" },
    { value: "lawyer", label: "Lawyer" },
    { value: "landlord", label: "Landlord" },
    { value: "maid", label: "Maid" },
    { value: "nurse", label: "Nurse" },
    { value: "pharmacist", label: "Pharmacist" },
    { value: "pension", label: "Pension" },
    { value: "realestate", label: "RealEstate" },
    { value: "royalties", label: "Royalties" },
    { value: "salary", label: "Salary" },
    { value: "salesperson", label: "Salesperson" },
    { value: "scientist", label: "Scientist" },
    { value: "teacher", label: "Teacher" },
    { value: "trader", label: "Trader" },
    { value: "other", label: "Other" },
    { value: "architect", label: "Architect" },
    { value: "policeman", label: "Policemen" },
    { value: "teacher", label: "Teacher" },
    { value: "student", label: "Student" },
].sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()));
exports.NO_ADDITIONS = [
    'statusx', "deadlinez", "updated", "loanidx", "periodx", "casew_officer",
    "consultantx", "depositx", "instalmentx", "homefound", "homeaddress", 'revenues',
    "workaddress", "nrcx", "solicitorx", "index", "wprofits", "wincomes", 'calendar',
    "created", "requiredz", "srequired", "month", "first_names", "debt", "fee_instalment",
    'fee_loan', "instalsumed", "sreceived", "instalmentx", "index", "year", 'elapsed', 'remain30',
    'expired', 'closure', 'expect30x', 'penalty', 'monthly', 'paidAmt', 'balInst', "id", "rank",
];
