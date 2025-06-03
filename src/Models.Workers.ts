//
//  Base interface with common fields
//
export interface IBaseEntity {
  [key: string]: any;
  id?: string | number | undefined;
  id_primary?: string;
  employ_id: string;
  consult_id: string;
  created?: Date | string;
  updated?: Date | string;
}

// Salary-specific interface  #1
export interface ISalary extends IBaseEntity {
  namex: string;
  salaryx: number;
  periodMonth: string;
  workedx: number;
  emailx: string;
  masterId?: number | null;
  fotox: number; // bigint auto-generated
  bankedx: string;
  periodYear: number | null;
  payTotal: number | null | string;
  payMonthly: number | null | string;
  salaryQueued?: number | null;
  rank?: number | null;
  registrar: string;
  sorted: string;
  companybill: number;
  proof?: string | null;
  countedadvances: number;
  countedreceipts: number;
  narratives: string;
  ranked: number;
  retirement: string | Date; // ISO date
  paydate: string | Date;
}

// Profile-specific interface  #2
export interface IProfile extends IBaseEntity {
  id: string; // UUID
  full_name: string | null;
  phone_number: string;
  position: string;
  department: string;
  avatar_url: string | null;
  website?: string | null;
  salaries_total: number;
  disbursed_total: number;
  profit_achieved: number;
  efficacy: number;
  started_at: string | null;
  bank_account: string | null;
  bank_details: string | null;
  email_address: string | null;
  home_address: string;
  next_kin: string;
  next_phone: string;
  user_name: string;
}

// Evaluation-specific interface #3
export interface IEvaluation extends IBaseEntity {
  username?: string;
  full_name: string;
  phonex?: string;
  officex?: string;
  departx?: string;
  emailx: string;
  avatar_url?: string;
  website?: string;
  salaries?: number;
  disbursed?: number;
  taxes?: number;
  //
  days_worked?: number;
  days_penalties?: number;
  profits_target?: number;
  profits_result?: number;
  efficacy?: number;
  started: Date | string;
  gross?: number;
  dailywages?: number;
  dailyprofits?: number;
  //
  balancex?: number;
  clients?: string[],
  loans_required?: number;
  loans_received?: number;
  //
  id_loans?: string[];
  id_collections?: string[];
  id_cases?: string[];
  count_loans?: number;
  count_collections?: number;
  //
  loans_deal?: number;
  loans_open?: number;
  loans_active?: number;
}
