import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData, id: Math.random().toString() }; // could be a guid
    props.onAddExpense(expenseData);
  };
  const [showAddNewExpense, setShowAddNewExpense] = useState(false);
  let hideExpenseForm = () => setShowAddNewExpense(false);
  let showExpenseForm = () => setShowAddNewExpense(true);
  console.log(showAddNewExpense);
  if (!showAddNewExpense) {
    console.log("hiding new expense form");
    return (
      <div className="new-expense">
        <button onClick={showExpenseForm}>Add Expense</button>
      </div>
    );
  } else {
    console.log("showing new expense form");
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onCancel={hideExpenseForm}
        />
      </div>
    );
  }
};

export default NewExpense;
