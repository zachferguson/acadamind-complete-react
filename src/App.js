import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2022, 11, 10),
      title: "Hookers and blow.",
      price: 2323.71,
    },
    {
      id: "e2",
      date: new Date(2022, 11, 9),
      title: "Hairspray.",
      price: 49.33,
    },
    {
      id: "e3",
      date: new Date(2022, 11, 8),
      title: "Hammer Pants",
      price: 183.29,
    },
    {
      id: "e4",
      date: new Date(2022, 11, 8),
      title: "Jean Jacket.",
      price: 202.8,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].price}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        price={expenses[3].price}
      ></ExpenseItem>
      {/* expenses.foreach(
      <ExpenseItem
        title={this.title}
        date={this.date}
        price={this.price}
      ></ExpenseItem>
      ) */}
    </div>
  );
}

export default App;
