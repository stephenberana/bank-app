import React, { useContext } from "react";
import { GlobalContext } from "../stores/GlobalState";

const Balance = () => {
  const { depositTransactions, withdrawTransactions } =
    useContext(GlobalContext);

  const depositAmounts = depositTransactions.map(
    (depositTransaction) => depositTransaction.depositAmount
  );

  const withdrawAmounts = withdrawTransactions.map(
    (withdrawTransaction) => withdrawTransaction.withdrawAmount
  );

  const totalDeposit = depositAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalWithdraw = withdrawAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const remainingBalance = (totalDeposit - totalWithdraw).toFixed(2);
  console.log(remainingBalance);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3 value={remainingBalance}>${remainingBalance}</h3>
      {/* <div className="withdrawn-deposit">
            <div className="plus">
                <h3>Deposited</h3>
                <p>+$.0.00</p>    
            </div>
            <div className="minus">
                <h3>Withdrawn</h3> 
                <p>-$0.00</p>   
            </div>       
        </div>     */}
    </div>
  );
};

export default Balance;
