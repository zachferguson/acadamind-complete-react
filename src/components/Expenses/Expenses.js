import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  let expenseList = props.expenses.map((expense, i) => {
    return (
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    );
  });
  return <Card className="expenses">{expenseList}</Card>;
};

export default Expenses;
