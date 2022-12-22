import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2023");
  let expenseList = props.expenses.map((expense, i) => {
    return (
      <ExpenseItem
        key={i}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    );
  });
  const filterChangeHandler = (filterYear) => {
    setSelectedFilter(filterYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={selectedFilter}
      />
      {expenseList}
    </Card>
  );
};

export default Expenses;
