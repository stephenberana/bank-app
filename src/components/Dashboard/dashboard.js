import React from 'react';
import Header from './header'
import Balance from './balance'
import AddTransaction from './amount-form'
import WithdrawList from './withdrawList'
import DepositList from './depositList'
import {GlobalContextProvider} from '../stores/GlobalState'

// import { useEffect, useState } from 'react'
// import UserStore from '../stores/userstore'
import './dashboard.css'

// const {Username} = props

class Dashboard extends React.Component {

    render() {

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
        )
    }
}   

export default Dashboard;