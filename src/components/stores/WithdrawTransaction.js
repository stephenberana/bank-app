import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'

const WithdrawTransaction = ({withdrawTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div>
        <li className="transaction">
                    <span className="transaction-amount">
                        ${withdrawTransaction.withdrawAmount}
                    </span>
                    <button className="delete-btn"
                    onClick={() => deleteTransaction(withdrawTransaction.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
        </div>        
    )
}

export default WithdrawTransaction