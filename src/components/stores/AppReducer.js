export default (state, action) => {
  switch (action.type) {
    case "ADD_DEPOSIT":
      return {
        ...state,
        depositTransactions: [action.payload, ...state.depositTransactions],
      };
    case "ADD_WITHDRAW":
      return {
        ...state,
        withdrawTransactions: [action.payload, ...state.withdrawTransactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        depositTransactions: state.depositTransactions.filter(
          (depositTransaction) => depositTransaction.id !== action.payload
        ),
        withdrawTransactions: state.withdrawTransactions.filter(
          (withdrawTransaction) => withdrawTransaction.id !== action.payload
        ),
      };
    case "TOTAL_BALANCE":
      return {
        ...state,
        remainingBalance: [action.payload, ...state.remainingBalance],
      };
    case "VALUES":
      return {
        ...state,
        values: [action.payload, ...state.values],
      };
    default:
      return state;
  }
};
