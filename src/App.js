 import './App.css';
 import React from 'react';
 import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense'
import Transection from './components/TransectionList';
import AddTransection from './components/AddTransection';

import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div>
        <Balance></Balance>
        <IncomeExpense></IncomeExpense>
        <Transection></Transection>
        <AddTransection></AddTransection>
      </div>
    </GlobalProvider>
  );
}

export default App;
