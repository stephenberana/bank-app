import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import DepositTransaction from "./DepositTransaction";
import WithdrawTransaction from "./WithdrawTransaction";
import Balance from "../Dashboard/balance";
import RegisterNow from "../Login/register-link";

const initialState = {
  depositTransactions:
    JSON.parse(localStorage.getItem("depositTransactions")) || [],
  withdrawTransactions:
    JSON.parse(localStorage.getItem("withdrawTransactions")) || [],
  //   remainingBalance:
  //     JSON.parse(localStorage.getItem("remainingBalance")) || [],
  values: JSON.parse(localStorage.getItem("values")) || [],
  username: localStorage.getItem("username") || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log("From Global Context");

  useEffect(() => {
    localStorage.setItem(
      "depositTransactions",
      JSON.stringify(state.depositTransactions)
    );
    localStorage.setItem(
      "withdrawTransactions",
      JSON.stringify(state.withdrawTransactions)
    );
    localStorage.setItem(
      "remainingBalance",
      JSON.stringify(state.remainingBalance)
    );
    localStorage.setItem("values", JSON.stringify(state.values));
  });

  console.log(initialState);

  const addDeposit = (depositTransaction) => {
    dispatch({
      type: "ADD_DEPOSIT",
      payload: depositTransaction,
    });
  };

  const addWithdraw = (withdrawTransaction) => {
    dispatch({
      type: "ADD_WITHDRAW",
      payload: withdrawTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const totalBalance = (remainingBalance) => {
    dispatch({
      type: "TOTAL_BALANCE",
      payload: remainingBalance,
    });
  };

  const storeInfo = (values) => {
    dispatch({
      type: "VALUES",
      payload: values,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        depositTransactions: state.depositTransactions,
        withdrawTransactions: state.withdrawTransactions,
        username: state.username,
        addDeposit,
        addWithdraw,
        deleteTransaction,
        totalBalance,
        storeInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
