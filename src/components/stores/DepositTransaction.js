import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'

const DepositTransaction = ({depositTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div>
            <li className="transaction">
                    <span className="transaction-amount">
                        ${depositTransaction.depositAmount}</span>
                    <button className="delete-btn" 
                    onClick={() => deleteTransaction(depositTransaction.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
        </div>
    )
}

export default DepositTransaction