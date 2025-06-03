"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizesForm = exports.maximumSample = exports.profileSample = exports.evaluationSample = exports.shoppingSample = exports.DummySalary = exports.depositSample = exports.expenseSample = exports.applicantForm = exports.collectionForm = exports.loanSample = exports.loanForm = exports.customaForm = void 0;
const helperDates_1 = require("./Formating/helperDates");
// 1
exports.customaForm = ({
    id: null, fotox: 0, namex: '', amountx: 0, homeaddress: '', homefound: '',
    phonex: '', emailx: '', dealx: 0, solicitorx: '', occupationx: '', nrcx: '',
    salaryx: 0, sureties: 'Non', revenues: 0, overdue1: 0, loansReceived: 0,
    loansRequired: 0, loansPenalties: 0, loansReturned: 0, loansInstalments: 0, loansTransacted: 0,
    loansProgress: 0, loansrevenue: 0, wclientnames: null, wamount: 0, wrequired: 0, wreceived: 0,
    wbalances: 0, wprofits: 0, wpenalties: 0, wbaillifs: 0, wbailsize: 0, wsuccess: 0, wdelays: 0,
    woverdue1: 0, wvolumes: 0, wdeals: 0, created: new Date(), updated: new Date(), wrestored: 0,
    surname: '', max_loans: 0, max_collections: 0, errors: 0, passport: "",
    wincomes: 0, balancesopen: 0, balancesactive: 0, registrar: "", first_names: "",
    workaddress: "", id_loans: undefined, id_collects: undefined, days_penalized: 0
});
// 2
exports.loanForm = ({
    loaneex: "",
    bankloaneex: "",
    statusx: "",
    amountx: 0,
    periodx: 0,
    periodz: 0,
    interestx: 0,
    loanidx: "",
    instunit: 0,
    receivedx: 0,
    requiredx: 0,
    balancex: 0,
    calendar: [],
    margin_target: [],
    created: new Date(),
    updated: new Date(),
    closingdate: new Date(),
    case_officer: "",
    consultantx: "",
    fotox: 0,
    naratives: "",
    registrar: "",
    passport: "",
    first_names: "",
    surname: "",
    parent_id: "",
    customer_volume: 0,
    profit_target: 0,
    profit_result: 0,
    year: 0,
    month: "",
    daily_fine: 0,
    days_penalized: 0,
    days_paid: 0,
    overdue1: 0,
    penalty_target: 0,
    security_name: "",
    security_mobile: "",
    mixed_balances: 0,
    case_volume: 0,
    overdue2: 0,
    overdue_penalties: 0
});
exports.loanSample = {
    loaneex: "",
    bankloaneex: "",
    statusx: "",
    amountx: 0,
    periodx: 0,
    periodz: 0,
    interestx: 0,
    loanidx: "",
    instunit: 0,
    receivedx: 0,
    requiredx: 0,
    balancex: 0,
    calendar: [],
    margin_target: [],
    created: new Date(),
    updated: new Date(),
    closingdate: new Date(),
    case_officer: "",
    consultantx: "",
    naratives: "",
    registrar: "",
    passport: "",
    first_names: "",
    surname: "",
    parent_id: "",
    customer_volume: 0,
    profit_target: 0,
    profit_result: 0,
    year: 0,
    month: "",
    daily_fine: 0,
    days_penalized: 0,
    days_paid: 0,
    overdue1: 0,
    penalty_target: 0,
    security_name: "",
    security_mobile: "",
    mixed_balances: 0,
    case_volume: 0,
    overdue2: 0,
    overdue_penalties: 0,
    fotox: 0
};
//3
exports.collectionForm = ({
    created: new Date(), updated: new Date(),
    closingdate: new Date(), deadlinez: new Date(),
    loaneex: "",
    amountx: 0,
    receivedz: 0,
    loanidx: "",
    requiredz: 0,
    sreceived: 0,
    srequired: 0,
    profit_result: 0,
    profit_target: 0,
    sprofits: 0,
    sbalances: 0,
    registrar: "",
    passport: "",
    first_names: "",
    surname: "",
    parent_id: "",
    year: 0,
    month: "",
    days_penalized: 0,
    fee_instalment: 0,
    fee_loan: 0,
    instalment_accumulated: 0,
    penaltyz: 0,
    periodx: 0,
    sensus: 0,
    routex: "",
    instalment_month: 0,
    rank: "",
    ranked: 0,
    rankx: "",
    progress: "",
    monthly_received: 0,
    monthly_target: 0,
    monthly_balance: 0,
    instalment_balance: 0,
    instalment_penalty: 0,
    monthly_accumulated: 0
});
//4
exports.applicantForm = ({
    surname: '', first_names: '', nrc_number: '', phone_number: '', email_address: '', date_of_birth: '',
    creation_date: new Date(), planned_profit: 0, loan_amount: 0, repayment_term: 0, income_source: '',
    monthly_income: 0, residential_address: '', inspection_date: '', bank_account: '', bank_details: '',
    loan_id: '', registrar: '', collateral_value: 0, guarantor_income: 0, guarantor_name: '', work_address: '',
    disbursement: "", loaneex: "", id: undefined
});
//5
exports.expenseSample = ({
    maskedx: "", enforcerx: "", amountx: 0, approvedx: "", registrar: "",
    describex: null, futurex: null, created: "", updated: "", gradingx: null,
    fotox: 0, url: "", descriptionx: null, categoryx: "", rank: null, purposex: ""
});
//6
exports.depositSample = ({
    description: "TestBed", enforcer: "test@yahoo.com", amount: 0, source: "TestsBed",
    destination: "Test-Bank", type: "Test", created: (0, helperDates_1.formatDateWhole)(new Date()).standard,
    updated: (0, helperDates_1.formatDateWhole)(new Date()).standard, deadline: (0, helperDates_1.formatDateWhole)(new Date()).standard, month: 9099, year: 9090,
    receiptNumber: 9099, fotox: 9099, id: "", rank: 0, registrar: "", url: ""
});
//7
exports.DummySalary = {
    id: 1, namex: "", emailx: "test@gmail.com", bankedx: "Zanaco",
    periodMonth: "", salaryx: 0, workedx: 0, fotox: 0, salaryQueued: 0,
    periodYear: 2001, payTotal: 6, payMonthly: 6, narratives: "",
    created: new Date(), updated: new Date(), retirement: new Date(),
    registrar: "pending", consult_id: "", employ_id: "", rank: 0, ranked: 0,
    countedadvances: 0, countedreceipts: 0, proof: "", paydate: new Date(), sorted: "",
    companybill: 0
};
//8
exports.shoppingSample = ({
    description: "Troopers", name: "Troopers", paymethod: "", status: "", admin: "", amount: 0, units: 0,
    registrar: "", created: new Date(), updated: new Date(), category: "", rank: "", url: ""
});
//9
exports.evaluationSample = ({
    id: "", phonex: "", officex: "", departx: "", createdx: new Date(), salaries: 0, disbursed: 0,
    taxes: 0, days: 0, profits: 0, efficacy: 0, gross: 0, dailywages: 0, dailyprofits: 0, badloans: 0,
    pendingloans: 0, consult_id: "", employ_id: "", sensus: 0, balancex: 0,
    created: "", updated: "", full_name: "", emailx: "", started: "",
    delayed: 0,
    id_loans: [],
    id_collections: [],
    id_cases: [],
    count_loans: 0
});
// 10
exports.profileSample = ({
    id: "", full_name: "pending", phone_number: "", position: "", department: "",
    created_at: new Date().toISOString(), updated_at: null, avatar_url: "pending",
    website: "pending", salaries_total: 0, disbursed_total: 0, profit_achieved: 0, efficacy: 0, started_at: null,
    bank_account: null, bank_details: null, id_primary: "", email_address: null, user_name: "",
    home_address: "", next_kin: "", next_phone: "", employ_id: "", consult_id: "", created: "", updated: ""
});
//11
exports.maximumSample = ({
    loans_required: 0, loans_received: 0, loans_bopen: 0, loans_bactive: 0, wages_amount: 0,
    expense_amount: 0, shopping_amount: 0, deposit_amount: 0, collect_amount: 0,
    grz_zra: 0, grz_rentals: 0, grz_license: 0, loans_amounts: 0, loans_bwhole: 0, loans_profit_r: 0,
    loans_profit_t: 0, loans_profit_a: 0, loans_zero: 0, loans_pplans: 0, collect_received: 0, customers_balance_open: 0,
    customers_balance_active: 0, customers_profits: 0, customers_received: 0, customers_amount: 0,
    verify: { loans_error: 0, customers_error: 0, collections_error: 0 },
    grz_napsa: 0,
    grz_transport: 0,
    grz_mobile: 0,
    investment_total: 0,
    grz_medics: 0,
    loans_cases: 0
});
//12
exports.sizesForm = ({
    customers: 0, collections: 0, properties: 0, salaries: 0, expenses: 0, debtors: 0,
    applicants: 0, deposits: 0, profiles: 0, shoppings: 0, evaluations: 0, penalties: 0, analytics: 0,
    loansClosed: 0, loansOpen: 0, loansActive: 0, loansNotClosed: 0,
    loansWhole: 0, loansFlawed: 0, loans_90days: 0, loans_zero: 0,
    loans_pplans: 0, loans_cases: 0,
    loans_2023x: 0, loans_2024x: 0, loans_2025x: 0,
    customersOpen: 0,
    customersActive: 0,
    customersFlawed: 0,
    customersClosed: 0,
    collects_closed: 0,
    collects_open: 0,
    collects_90days: 0,
    collects_unique: 0,
    collects_bad_whole: 0,
    collects_bad_unique: 0,
    collects_2023s: 0,
    collects_2024s: 0,
    collects_2025s: 0,
    collects_zeros: 0,
    loans_warning: 0
});
//=============================================================================================
