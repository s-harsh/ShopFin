import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/globalState'

const Balance = () => {
  const {transections}= useContext(GlobalContext);

  const amounts = transections.map(transection => transection.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Current Balance :</h4>
      <h1>₹{total}</h1>
    </div>
  )
}

export default Balance
