import { useContext } from "react";
import React from "react";
import { GlobalContext } from "../context/globalState";
import { Transection } from "./Transection";

const TransectionList = () => {
  const {transections} =  useContext(GlobalContext);

  

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
      {transections.map(transection=>(<Transection key={transection.id} transection={transection}></Transection>
      ))}
        
      </ul>
    </div>
  );
};

export default TransectionList;
