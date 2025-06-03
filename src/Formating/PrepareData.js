"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareOpenLoansData = prepareOpenLoansData;
exports.filterHighestInstalmentByLoanId = filterHighestInstalmentByLoanId;
const NexusData_1 = require("../constants/NexusData");
function prepareOpenLoansData(tableData) {
    const openLoans = tableData.filteredLoans.filter((loan) => loan.statusx !== NexusData_1.ISTATUS_CLOSED);
    const openLoanIds = openLoans.map((loan) => loan.loanidx);
    const relevantCollections = tableData.filteredCollections.filter((collection) => openLoanIds.includes(collection.loanidx));
    return {
        filteredLoans: openLoans,
        filteredCollections: relevantCollections,
    };
}
function filterHighestInstalmentByLoanId(collections) {
    const map = new Map();
    for (const item of collections) {
        const existing = map.get(item.loanidx);
        if (!existing || item.instalment_accumulated > existing.instalment_accumulated) {
            map.set(item.loanidx, item);
        }
    }
    return Array.from(map.values());
}
