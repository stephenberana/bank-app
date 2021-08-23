import React, {useContext} from 'react'
import {GlobalContext} from '../stores/GlobalState'
import WithdrawTransaction from '../stores/WithdrawTransaction'

const WithdrawList = () => {
    const {withdrawTransactions} = useContext(GlobalContext)

    console.log(withdrawTransactions)

    return (
        <div className="transaction-withdraw">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {withdrawTransactions.map(withdrawTransaction => (
                <WithdrawTransaction key={withdrawTransaction.id} withdrawTransaction = {withdrawTransaction} />
                ))}
            </ul>
        </div>
    )
}

export default WithdrawList