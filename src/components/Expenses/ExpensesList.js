import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length <= 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses in this time period.
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, id) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.amount}
          />
        );
      })}
      ;
    </ul>
  );
};

export default ExpensesList;
