import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2023");
  let filteredExpenses = props.expenses.filter((ex) => {
    return ex.date.getFullYear().toString() === selectedFilter;
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
      {filteredExpenses.map((expense, id) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
