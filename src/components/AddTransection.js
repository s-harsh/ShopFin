import React, { useState,useContext } from "react";
import { GlobalContext } from "../context/globalState";

const AddTransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [desc,setDesc]=useState('');
  const {addTransection} = useContext(GlobalContext);

  const onSumbit = e => {
    e.preventDefault();

    const newTransection = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransection(newTransection);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSumbit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Customer Name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="description">
            Description <br />
            {/* (negative - expense, positive - income) */}
          </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter Description of the Transaction... "
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransection;
