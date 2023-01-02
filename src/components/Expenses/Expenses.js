import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2022");
  let filteredExpenses = props.expenses.filter((ex) => {
    return ex.date.getFullYear().toString() === selectedFilter;
  });
  const filterChangeHandler = (filterYear) => {
    setSelectedFilter(filterYear);
  };
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={selectedFilter}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
