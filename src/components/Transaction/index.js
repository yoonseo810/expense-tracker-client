import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { formatNumber } from '../../util/format';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const { text, amount } = transaction;
  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        {sign}${formatNumber(Math.abs(amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
