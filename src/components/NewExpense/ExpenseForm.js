import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAmount, setEditedAmount] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const titleChangeHandler = (e) => {
    setEditedTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEditedAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEditedDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: editedTitle,
      amount: +editedAmount,
      date: new Date(editedDate),
    };
    props.onSaveExpense(expenseData);
    setEditedTitle("");
    setEditedAmount("");
    setEditedDate("");
    props.onCancel(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={editedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={editedAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={editedDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={() => props.onCancel(false)}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
