import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
