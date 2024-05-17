import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { formatNumber } from '../../util/format';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.reduce((acc, item) => {
    if (item.amount > 0) {
      acc += item.amount;
    }
    return acc;
  }, 0);

  const expense =
    transactions.reduce((acc, item) => {
      if (item.amount < 0) {
        acc += item.amount;
      }
      return acc;
    }, 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${formatNumber(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${formatNumber(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
