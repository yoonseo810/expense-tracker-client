import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { formatNumber } from '../../util/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions?.reduce((acc, item) => (acc += item.amount), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${formatNumber(total)}</h1>
    </>
  );
};

export default Balance;
