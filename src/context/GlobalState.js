import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';
import { actions } from '../constants';

// initial state
const initialState = {
  transactions: [],
};

// create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  const deleteTransaction = (id) => {
    dispatch({
      type: actions.DELETE_TRANSACTION,
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: actions.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
