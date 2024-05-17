import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';
import { actions } from '../constants';
import axios from 'axios';

// initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');
      const { data } = res.data;
      dispatch({
        type: actions.GET_TRANSACTIONS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actions.TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: actions.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: actions.TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);
      dispatch({
        type: actions.ADD_TRANSACTION,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: actions.TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
