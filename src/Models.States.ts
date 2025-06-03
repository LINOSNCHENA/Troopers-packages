
import type { IProperty, IExpense, IShopping, IDeposit, IAnalytics } from "./Models.Expenses";
import type { ICustoma, ILoan, ICollection } from "./Models.Loans";
import type { ISalary, IProfile } from "./Models.Workers";

export interface ICustomerState {
  loading: boolean; //0
  customers: ICustoma[]; // 1
  loans: ILoan[];
  collections: ICollection[];
  loansOpen: ILoan[];
  datexStamp: string | null; // 10
  startDate: Date;
  error: string | null;
  disbursedMax: number;
  elapsedDays: number;
  increaseFactor: number;
  pFactor: number;
  markUp: number;
  managerx: string | undefined;
  customersHeaders: any[];
  introductionsHeaderTop: any[];
  introductionsHeaderBottom: any[];
}

export interface ILoanState {
  loading: boolean; //0
  customers: ICustoma[]; // 1-
  loans: ILoan[];
  collections: ICollection[];
  loansOpen: ILoan[];
  loansClosed: ILoan[];
  loansFlawed: ILoan[];
  loansMonths: ILoan[];
  loansActive: ILoan[];
  loansCases: ILoan[];
  datexStamp: string | null; // 10
  stampDate: Date;
  startDate: Date;
  error: string | null;
  disbursedMax: number;
  elapsedDays: number;
  increaseFactor: number;
  markUp: number;
  managerx: string | undefined;
  loansHeaders: any[];
  delayHeaders: any[];
}

export interface ICollectionState {
  loading: boolean; //0
  customers: ICustoma[]; // 1-
  loans: ILoan[];
  collections: ICollection[];
  loansOpen: ILoan[];
  loansClosed: ILoan[];
  datexStamp: string | null; // 10
  stampDate: Date;
  startDate: Date;
  error: string | null;
  disbursedMax: number;
  elapsedDays: number;
  increaseFactor: number;
  markUp: number;
  managerx: string | undefined;
  collectionHeaders: any[];
  kwacha: any[];
  paints: any[];
}

export interface IFamilyState {
  loading: boolean;
  avatars: IProfile[];
  profiles: IProfile[];
  datexStamp: string | null;
  stampDate: Date;
  startDate: Date;
  error: string | null;
  elapsedDays: number;
  managerx: string | undefined;
  increaseFactor: number;
  maxShoppings: number;
  maxProfiles: number;
}

export interface IAnalyticsState {
  loading: boolean; //0
  customers: ICustoma[]; // 1
  loans: ILoan[]; // 2
  collections: ICollection[]; // 3
  properties: IProperty[]; //4
  expenses: IExpense[]; // 5
  salaries: ISalary[]; //6
  shoppings: IShopping[]; //7
  deposits: IDeposit[]; // 8
  analytics: IAnalytics[]; //11
  collectionOne: ICollection[]; //13
  collectionTwo: ICollection[]; //14
  datexStamp: string | null; // 17
  error: string | null;
  disbursedMax: number;
  elapsedDays: number;
  managerx: string | undefined;
  increaseFactor: number;
  markUp: number;
  headers: any[];
}


export interface IAnalyticsStateSmall {
  loading: boolean;
  collections: ICollection[]; //1
  loans: ILoan[]; //2
  error: string | null; // Others
  managerx: string | undefined; // Others
}


// ====================================================|9|

