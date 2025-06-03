// NotDB
import type { IAnalytics, IDeposit, IExpense, IProperty, IShopping } from "./Models.Expenses";
import type { ILoan, ICollection, IApplicant, ICustoma } from "./Models.Loans";
import type { IEvaluation, IProfile, ISalary } from "./Models.Workers";

export interface IHubArrays {//10
  customers: ICustoma[];
  customers_open: ICustoma[];
  customers_active: ICustoma[];
  customers_flawed: ICustoma[];
  customers_closed: ICustoma[];

  loans: ILoan[];
  loans_closed: ILoan[];
  loans_open: ILoan[];
  loans_active: ILoan[];
  loans_notclosed: ILoan[];
  loans_flawed: ILoan[];
  loans_90days: ILoan[];
  loans_pplans: ILoan[];
  loans_cases: ILoan[];
  loans_2023x: ILoan[];
  loans_2024x: ILoan[];
  loans_2025x: ILoan[];
  loans_warning: ILoan[];


  collections: ICollection[];
  collects_90days: ICollection[];
  collects_closed: ICollection[];
  collects_open: ICollection[];
  collects_unique: ICollection[];
  collects_bad_unique: ICollection[];
  collects_bad_whole: ICollection[];
  collects_2023s: ICollection[];
  collects_2024s: ICollection[];
  collects_2025s: ICollection[];
  collects_zeros: ICollection[];
}

export interface IDashArrays {//10
  applicants: IApplicant[];
  analytics: IAnalytics[];
  salaries: ISalary[];
  evaluations: IEvaluation[];
  deposits: IDeposit[];
  expenses: IExpense[];
  profiles: IProfile[],
  shoppings: IShopping[],
  properties: IProperty[],
}

export interface IMaximum {
  loans_amounts: number;//01
  loans_required: number;//02
  loans_received: number;//03
  loans_bopen: number; // 04
  loans_bactive: number; //05
  loans_bwhole: number;
  loans_profit_r: number;//06
  loans_profit_t: number;//06
  loans_profit_a: number;//06
  loans_zero: number;//06
  loans_pplans: number;//06
  loans_cases: number;//06

  collect_amount: number,//11
  collect_received: number,//13

  customers_balance_open: number;
  customers_balance_active: number;
  customers_profits: number;
  customers_received: number;//14
  customers_amount: number;//12

  verify: {
    loans_error: number,
    customers_error: number,
    collections_error: number,
  };

  wages_amount: number;//07
  expense_amount: number;//08
  shopping_amount: number;//09
  deposit_amount: number;//10

  grz_napsa: number;
  grz_zra: number;
  grz_medics: number;

  grz_rentals: number;
  grz_license: number;
  grz_transport: number;
  grz_mobile: number;

  investment_total: number;
}


export interface IDataSizes {
  customers: number;
  properties: number;
  salaries: number;
  expenses: number;
  debtors: number;
  deposits: number;
  profiles: number;
  shoppings: number;
  evaluations: number;
  penalties: number;
  analytics: number;

  loansClosed: number;
  loansOpen: number;
  loansActive: number;
  loansNotClosed: number;
  loansWhole: number;
  loansFlawed: number;
  loans_90days: number;
  loans_zero: number;
  loans_pplans: number;
  loans_cases: number;

  loans_2023x: number;
  loans_2024x: number;
  loans_2025x: number;
  loans_warning: number;

  applicants: number;//1
  customersOpen: number;
  customersActive: number;
  customersFlawed: number;
  customersClosed: number;//5

  collections: number;//1
  collects_closed: number;
  collects_open: number;
  collects_90days: number;
  collects_unique: number;
  collects_bad_whole: number;
  collects_bad_unique: number;//7

  collects_2023s: number;
  collects_2024s: number;
  collects_2025s: number;//7
  collects_zeros: number;//7
}

export interface IJob {
  counter: number
  rank: number
  status: 'Open' | 'Closed'
  title: string
  location: string
  role: string
  duties: string[]
  requirements: string[]
  applicationMethod: string
}

export type ColumnItem = {
  label: string;
  value: string;
  color?: [number, number, number];
};

export interface IFilteredData {
  filteredLoans: Array<ILoan>;
  filteredCollections: Array<ICollection>;
}
export interface TabConfig {
  value: string;
  icon: string;
  label: string;
  count: number;
}

export interface SoliCustoma {
  name: string;
  dealx: number;
  revenues: number;
  first_names: string[];
  day1: number;
  wages: number;
  // ====================
  eAmount: number;
  eReceived: number;
  eRequired: number;
  // =====================
  allAmount: number;
  allRequired: number;
  allReceived: number;
  // =====================
  successAll: number;
  successOne: number
}



export interface IMarginAmount {
  iPd: number;        // Installment period
  rSum: number;       // Received sum
  due: number;        // Expected installment amount
  d1d: string;        // Due date (formatted)
  d2l: string;        // Last payment date (formatted)
  bal: number;        // Balance = due - received
  eDays: number;      // Elapsed days between due and latest payment
}

