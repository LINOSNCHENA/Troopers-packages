//
// SEVEN
//

// 1. Method to format Imanges
export const shouldFormatField = (key: string, value: any) => {
  if (
    typeof value === "number" &&
    [
      "penaltyx",
      "amountx",
      "requiredx",
      "receivedx",
      "balancex",
      "profitx",
      "sreceived",
      "penaltiesclosed",
      "profit_target",
      "profit_result",
      "instunit",
      'overdue_penalties'
    ].includes(key)
  ) {
    return true; // Loans
  }
  if (
    typeof value === "number" &&
    [
      "amountx",
      "requiredz",
      "receivedz",
      "received2",
      "points",
      "sbalances",
      "srequired",
      "sprofits",
      "points",
      "penaltyz",
      "fee1",
      "fee2",
      "overdue1",
      "instunit",
      "overdue2",
      "overdue_penalties",
      "balancez",
      "instalsumed",
      "overpay",
      "profit_target",
      "profit_result"
    ].includes(key)
  ) {
    return true; // Collections
  }
  if (
    typeof value === "number" &&
    [
      "salaryx",
      "loansPenalties",
      "loansBalance",
      "loansRequired",
      "loansReceived",
      "balancesopen",
      "balancesactive",
      "penaltiesclosed",
    ].includes(key)
  ) {
    return true; // Customers
  }
  return false;
};

// 6. Model Alert
export const showTroopersAlert = (message: string, title: string = "Notification") => {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%;
    display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5);
  `;
  const modalContent = `
    <div style="
      background: white; padding: 20px; border-radius: 8px; text-align: center; width: 30%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 15px;">${title}</div>
      <div style="font-size: 16px; margin-bottom: 20px;">${message}</div>
      <button style="
        padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
        OK
      </button>
    </div>
  `;
  modal.innerHTML = modalContent;
  const closeButton = modal.querySelector("button");
  closeButton?.addEventListener("click", () => document.body.removeChild(modal));
  document.body.appendChild(modal);
}
// =============================================|FIVE|===================================================

