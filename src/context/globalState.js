import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transections: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ]
};

// create context
export const GlobalContext = createContext(initialState);

// Providere Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTransection(transection) {
    dispatch({ type: 'ADD_TRANSECTION', 
    payload: transection
   });
  }

  function deleteTransection(id) {
    dispatch({ type: 'DELETE_TRANSECTION', 
    payload: id
   });
  }
  return (
    <GlobalContext.Provider
      value={{ transections: state.transections, deleteTransection,
      addTransection
       }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
