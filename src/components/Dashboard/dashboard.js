import React from "react";
import Header from "./header";
import Balance from "./balance";
import AddTransaction from "./amount-form";
import WithdrawList from "./withdrawList";
import DepositList from "./depositList";
import { GlobalContextProvider } from "../stores/GlobalState";
// import { Redirect } from "react-router-dom";
// import { useEffect, useState } from 'react'
// import UserStore from '../stores/userstore'
import "./dashboard.css";

function Dashboard() {
  //   if (!authorized) {
  //     window.alert("User not found.");
  //     return <Redirect to="/login" />;
  //   }

  return (
    <GlobalContextProvider>
      <div className="dash-container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <DepositList />
          <WithdrawList />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default Dashboard;
