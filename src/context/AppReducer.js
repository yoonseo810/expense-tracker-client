import { actions } from '../constants';

const AppReducer = (state, action) => {
  switch (action.type) {
    case actions.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case actions.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default AppReducer;
