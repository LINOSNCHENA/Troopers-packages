// index.ts
export const API_URL = 'https://tapi.example.com';
export const API_VERSION = 'https://troopers-money-matters.netlify.app/';


// ====================================================|1|

import type { IProperty } from "./Models.Expenses";
import type { IProfile, IEvaluation, ISalary } from "./Models.Workers";

export interface ICustoma {  //1
    [key: string]: any;
    id?: any;
    fotox?: number;
    namex: string;
    amountx: number;
    homeaddress?: string;
    homefound: string;
    phonex?: string;
    emailx: string;
    dealx?: number;
    deals_open?: number;
    deals_active?: number;

    solicitorx?: string;
    occupationx: string;
    nrcx: string;
    passport: string;
    salaryx: number;
    sureties: string;
    days_penalized: number;
    overdue1: number;
    loansReceived: number;
    loansRequired: number;
    loansPenalties: number;
    loansReturned: number;
    loansInstalments: number;
    loansTransacted: number;
    loansProgress: number;
    loansrevenue: number;
    // ===========================================
    wclientnames?: any;
    wamount: number;
    wrequired: number;
    wreceived: number;
    wbalances: number;
    wprofits: number;
    wpenalties: number;
    wbaillifs: number;
    wbailsize: number;
    wsuccess: number;
    wdelays: number;
    woverdue1: number;
    wvolumes: number;
    wdeals: number;
    created: Date;
    updated: Date;
    wrestored: number;
    wincomes: number;
    balancesopen: number; //
    balancesactive: number;
    registrar: string;
    first_names: string;
    surname: string;
    max_loans: number;
    max_collections: number;
    errors: number;
    workaddress: string;
    id_loans: any;
    id_collects: any;
}

// ====================================================|2|

export interface ILoan {
    [key: string]: any;
    id?: any;
    loaneex: string;
    bankloaneex: string;
    statusx: string;
    amountx: number;
    periodx: number;
    periodz: number;
    interestx: number;
    loanidx: string;
    instunit: number;
    receivedx: number;
    requiredx: number;
    balancex: number;
    created: Date;
    updated: Date;
    closingdate: Date; //
    case_officer: string; //
    consultantx: string; //
    naratives: string;//
    registrar: string;
    passport: string;
    first_names: string;
    surname: string;
    parent_id: string;
    customer_volume: number;
    profit_target: number;
    profit_result: number;
    year: number;
    month: string;
    daily_fine: number;
    days_penalized: number;
    overdue1: number;
    overdue2: number;
    overdue_penalties: number;
    calendar: any[];
    rank?: string;
    ranked?: string;
    recovery_id?: number;
    security_name: string;
    security_mobile: string;
    mixed_balances: number;
    case_volume: number;
}



// ====================================================|3|

export interface ICollection {
    [key: string]: any;
    id?: any;
    loaneex: string;
    amountx: number;
    receivedz: number;
    bankloaneex?: string | null;
    banktrooperx?: string | null;
    loanidx: string;
    requiredz: number;
    sreceived: number;
    srequired: number;
    profit_result: number;
    profit_target: number;
    sprofits: number;
    sbalances: number;
    registrar: string;
    passport: string;
    first_names: string;
    surname: string;
    created: Date;
    updated: Date;
    closingdate: Date;
    deadlinez: Date;
    consultantz?: string | null;
    parent_id: string;
    year: number;
    month: string;
    // =========================
    days_penalized: number;
    fee_instalment: number;
    fee_loan: number;
    // =========================
    instalment_accumulated: number;
    instalment_balance: number;
    instalment_penalty: number;
    monthly_received: number;
    monthly_target: number;
    monthly_balance: number;
    monthly_accumulated: number;
    penaltyz: number;
    // =========================
    periodx: number;
    sensus: number;
    routex: string,
    instalment_month: number;
    rank: string;
    ranked: number;
    rankx: string; // Fotox
    progress: string;
}

// ==============================================================[4]
export interface IApplicant {
    [key: string]: any;
    id: any;
    surname: string //1
    first_names: string //2
    nrc_number: string //3
    phone_number: string //13
    email_address: string //14
    date_of_birth: string //4
    creation_date: Date
    deadlines?: string[];
    instalment?: number
    planned_profit: number;
    // ======================================//
    loan_amount: number //1
    repayment_term: number //2
    income_source: string //3
    monthly_income: number //4
    residential_address: string //5
    inspection_date: string //6
    bank_account: string //7
    bank_details: string //8
    loan_id: string;//9
    status?: string; //10
    collateral_details?: string //11
    registrar: string //11
    collateral_value: number //12
    guarantor_income: number //13
    guarantor_name: string //14
    work_address: string //15
    disbursement: string;
    loaneex: string;
}

// ===========================================================================//

export type DBaseEntity = | ILoan | ICustoma | ICollection | IApplicant | IProperty | IProfile | IEvaluation | ISalary;

export interface UpdateResult {
    id: string;
    surname?: string;
    firstnames?: string;
    receiptNumber?: string;
    loansReceived?: number;
    salaryx?: number;
    amountx?: number;
}