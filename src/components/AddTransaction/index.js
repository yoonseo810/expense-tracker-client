import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
