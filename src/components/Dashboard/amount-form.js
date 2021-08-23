import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../stores/GlobalState";

const AddTransaction = () => {
  const { addDeposit, addWithdraw, remainingBalance } =
    useContext(GlobalContext);
  //deposit list update
  const [deposit, setDeposit] = useState({
    depositAmount: 0,
  });
  const { depositAmount } = deposit;
  const onChangeDeposit = (e) => {
    setDeposit({ ...deposit, [e.target.name]: e.target.value });
  };
  const onSubmitDeposit = (e) => {
    e.preventDefault();

    if (depositAmount > 0) {
      const newDepositTransaction = {
        id: uuidv4(),
        depositAmount: deposit.depositAmount * 1,
      };
      addDeposit(newDepositTransaction);
      setDeposit({
        depositAmount: 0,
      });
    }
  };

  //withdraw list update
  const [withdraw, setWithdraw] = useState({
    withdrawAmount: 0,
  });
  const { withdrawAmount } = withdraw;
  const onChangeWithdraw = (e) => {
    setWithdraw({ ...withdraw, [e.target.name]: e.target.value });
  };
  const onSubmitWithdraw = (e) => {
    e.preventDefault();
    if (withdrawAmount > 0) {
      const newWithdrawTransaction = {
        id: uuidv4(),
        withdrawAmount: withdraw.withdrawAmount * 1,
      };
      if (withdrawAmount > remainingBalance) {
        window.alert(
          "Withdrawal amount must not be greater than total balance."
        );
        return false;
      }
      addWithdraw(newWithdrawTransaction);
      setWithdraw({
        withdrawAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitDeposit}>
        <div className="input-group deposit">
          <input
            type="number"
            value={depositAmount}
            name="depositAmount"
            placeholder="Deposit amount"
            autoComplete="off"
            onChange={onChangeDeposit}
          ></input>
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitWithdraw}>
        <div className="input-group withdraw">
          <input
            type="number"
            value={withdrawAmount}
            name="withdrawAmount"
            placeholder="Withdraw amount"
            autoComplete="off"
            onChange={onChangeWithdraw}
          ></input>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
