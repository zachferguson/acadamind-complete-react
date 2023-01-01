import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    date: new Date(2022, 11, 10),
    title: "Hookers and blow.",
    amount: 2323.71,
  },
  {
    id: "e2",
    date: new Date(2022, 11, 9),
    title: "Hairspray.",
    amount: 49.33,
  },
  {
    id: "e3",
    date: new Date(2022, 11, 8),
    title: "Hammer Pants",
    amount: 183.29,
  },
  {
    id: "e4",
    date: new Date(2022, 11, 8),
    title: "Jean Jacket.",
    amount: 202.8,
  },
  {
    id: "e5",
    date: new Date(2021, 7, 11),
    title: "Blue Raspbery Slushie",
    amount: 3.0,
  },
  {
    id: "e6",
    date: new Date(2023, 1, 1),
    title: "Beeper",
    amount: 323.99,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
