import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
