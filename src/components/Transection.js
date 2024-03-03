import React from "react";
import { GlobalContext } from "../context/globalState";
import { useContext } from "react";

export const Transection = ({ transection }) => {
  const { deleteTransection } = useContext(GlobalContext);
  // Get sign
  const sign = transection.amount < 0 ? "-" : "+";
  return (
    <li className={transection.amount < 0 ? "minus" : "plus"}>
      {transection.text}{" "}
      <span>
        {sign}
        {Math.abs(transection.amount)} ₹
      </span>
      {transection.desc}{"Desc :"}
      <button
        onClick={() => deleteTransection(transection.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
