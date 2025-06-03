
import { ILoan, ICollection } from "..";
import { ISTATUS_CLOSED } from "../constants/NexusData";
import { IFilteredData } from "../Models.NotDBased";

export function prepareOpenLoansData(tableData: {
  filteredLoans: ILoan[];
  filteredCollections: ICollection[];
}): IFilteredData {
  const openLoans = tableData.filteredLoans.filter(
    (loan) => loan.statusx !== ISTATUS_CLOSED
  );
  const openLoanIds = openLoans.map((loan) => loan.loanidx);
  const relevantCollections = tableData.filteredCollections.filter(
    (collection) => openLoanIds.includes(collection.loanidx)
  );

  return {
    filteredLoans: openLoans,
    filteredCollections: relevantCollections,
  };
}


export function filterHighestInstalmentByLoanId(collections: ICollection[]): ICollection[] {
  const map = new Map<string, ICollection>();

  for (const item of collections) {
    const existing = map.get(item.loanidx);
    if (!existing || item.instalment_accumulated > existing.instalment_accumulated) {
      map.set(item.loanidx, item);
    }
  }

  return Array.from(map.values());
}

