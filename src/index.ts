// index.ts
export const API_URL = 'https://tapi.example.com';
export const API_VERSION = 'https://troopers-money-matters.netlify.app/';

export interface User {
    id: string;
    email: string;
    username?: string;
    full_name?: string;
    avatar_url?: string;
    created_at: Date;
    updated_at: Date;
    roles?: string[];
}

export interface Loan {
    id?: string;
    loaneex: string;
    bankloaneex: string;
    statusx: string;
    consultantx: string;
    amountx: number;
    periodx: number;
    periodz: number;
    interestx: number;
    loanidx: string;
    instunit: number;
    receivedx: number;
    requiredx: number;
    balancex: number;
    penaltyx: number;
    datex: string[];
    created: Date;
    updated: Date;
    case_officer: string;
    profitx: number;
    profitz: number;
    fotox: number;
    fotok: string;
    sumfromclient: number;
    sreceived: number;
    day1: number;
    overdue1: number;
}

export interface Collection {
    id?: string;
    loaneex: string;
    amountx: number;
    receivedz: number;
    bankloaneex?: string | null;
    banktrooperx?: string | null;
    collectionMasterx?: string | null;
    profitx: number;
    created: Date;
    updated: Date;
    masterId?: number | null;
    loanidx: string;
    periodx: number;
    fotox: number;
    consultantz?: string | null;
    requiredz: number;
    depositx: number;
    instalmentx: number;
    deadlinez: Date;
    sbalances: number;
    sprofits: number;
    sreceived: number;
    profitz: number;
    srequired: number;
    balancez: number;
    sensus: number;
    day1: number;
    overdue1: number;
    fee1: number;
    fee2: number;
    overdue2: number;
    day2: number;
    full_name?: string;
    avatar_url?: string;
    created_at: Date;
    updated_at: Date;
    roles?: string[];
}