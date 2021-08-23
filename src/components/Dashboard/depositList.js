import React, {useContext} from 'react'
import {GlobalContext} from '../stores/GlobalState'
import DepositTransaction from '../stores/DepositTransaction'

const DepositList = () => {
    const {depositTransactions} = useContext(GlobalContext)

    console.log(depositTransactions)

    return (
        <div className="transaction-deposit">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {depositTransactions.map(depositTransaction => (
                <DepositTransaction key={depositTransaction.id} depositTransaction={depositTransaction} />
                ))}
            </ul>
        </div>
    )
}

export default DepositList