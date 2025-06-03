export interface IMixed {
  id?: string;
  namex?: string;
  surname?: string;
  first_names?: string;
  nrcx?: string;
  passport?: string;
  emailx?: string;
  phonex?: string;
  homeaddress?: string;
  homefound?: string;
  workaddress?: string;
  occupationx?: string;
  salaryx?: number;
  solicitorx?: string;
  sureties?: string;
  fotox?: number;

  amountx?: number;
  balancesactive?: number;
  balancesopen?: number;
  loansInstalments?: number;
  loansPenalties?: number;
  loansProgress?: number;
  loansReceived: number;
  loansRequired?: number;
  loansReturned?: number;
  loansTransacted?: number;
  loansrevenue?: number;

  max_collections?: number;
  max_loans?: number;
  id_loans?: string[];
  id_collects?: string[];
  deals_open?: number;
  deals_active?: number;
  dealx?: number;

  znamex?: string;
  zsolicitorx?: string;
  zloans?: number;
  zcolls?: number;
  zcusts?: number;
  zdeals_open?: number;

  wdeals?: number;
  wclientnames?: string[];
  wbaillifs?: number;
  wbailsize?: number;
  wbalances?: number;
  wrequired?: number;
  wreceived?: number;
  wprofits?: number;
  wpenalties?: number;
  wdelays?: number;
  wvolumes?: number;
  wincomes?: number;
  wamount?: number;
  wsuccess?: number;
  wrestored?: number;

  sensus_cols?: number;
  sensus_loans?: number;

  registrar?: String
  created?: Date;
  updated?: Date;
  days_penalized?: number;
  errors?: number;
  year?: number;

  v1?: number;
  v2?: number;
  v3?: number;
  v2balances: number;
  v3balances: number
}
